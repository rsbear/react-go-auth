package resolvers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"

	helpers "github.com/rsbear/goplay/helpers"
	"github.com/rsbear/goplay/models"
)

func (r *queryResolver) Users(ctx context.Context) ([]*models.User, error) {
	var users []*models.User

	if err := r.DB.Model(&users).Select(); err != nil {
		return nil, err
	}
	return users, nil
}

func (r *mutationResolver) Signup(ctx context.Context, input models.NewUser) (*models.User, error) {
	usr := models.User{
		Email:    input.Email,
		Username: input.Username,
	}

	auth := models.Auth{
		Email:  input.Email,
		Secret: helpers.String(5),
	}
	if err := r.DB.Insert(&auth); err != nil {
		return nil, err
	}

	if err := r.DB.Insert(&usr); err != nil {
		return nil, err
	}

	return &usr, nil
}

func (r *mutationResolver) Login(ctx context.Context, email string, secret string) (*models.Response, error) {
	// first check if user exists
	user := models.User{Email: email}
	if err := r.DB.Model(&user).Where("email = ?", email).Select(); err != nil {
		return nil, err
	}

	// check if auth exists
	auth := models.Auth{Email: email, Secret: ""}
	if err := r.DB.Model(&auth).Where("email = ?", email).Select(); err != nil {
		// res := models.Response{Success: false, Message: "failed at auth select"}
		fmt.Println("failed inside auth")
		return nil, err
	}
	test, _ := json.Marshal(&auth.Secret)
	fmt.Println(string(test))

	//check if auth.secret == arg secret
	if secret != auth.Secret {
		res := models.Response{Success: false, Message: "That's not the magic word"}
		return &res, nil
	}

	// create and send token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user": user.Username,
		"exp":  time.Now().Add(time.Hour * time.Duration(1)).Unix(),
		"iat":  time.Now().Unix(),
	})
	tokenString, err := token.SignedString([]byte("APP_KEY"))
	if err != nil {
		fmt.Println("token failed")
	}
	func(http.Handler) http.Handler {
		return func(next http.Handler) http.Handler {
			return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
				c, err := req.Cookie("auth-cookie")

				// Allow unauthenticated users in
				if err != nil || c == nil {
					next.ServeHTTP(w, req)
					return
				}

				ctx := context.WithValue(req.Context(), userCtxKey, user.Username)

				// and call the next with our new context
				req = req.WithContext(ctx)
				next.ServeHTTP(w, req)
			})
		}
	}

	//return success response
	res := models.Response{Success: true, Message: "successfully checking user and auth"}
	return &res, nil
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id int) (*models.Response, error) {
	err := r.DB.Delete(&models.User{ID: id})
	if err != nil {
		panic(err)
	}

	res := models.Response{
		Success: true,
		Message: "successfully deleted",
	}

	return &res, nil
}
