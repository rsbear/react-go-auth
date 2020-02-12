package resolvers

import (
	"context"

	"github.com/rsbear/goplay/helpers"
	"github.com/rsbear/goplay/models"
)

func (r *queryResolver) Auths(ctx context.Context) ([]*models.Auth, error) {
	var auths []*models.Auth

	if err := r.DB.Model(&auths).Select(); err != nil {
		return nil, err
	}
	return auths, nil
}

func (r *mutationResolver) CreateLoginAuth(ctx context.Context, email string) (*models.Response, error) {
	auth := models.Auth{
		Email:  email,
		Secret: helpers.String(5),
	}
	if err := r.DB.Insert(&auth); err != nil {
		return nil, err
	}

	res := models.Response{
		Success: true,
		Message: "Successfully created login auth",
	}

	return &res, nil
}

func (r *mutationResolver) DeleteAuth(ctx context.Context, id int) (*models.Response, error) {
	if err := r.DB.Delete(&models.Auth{ID: id}); err != nil {
		return nil, err
	}

	resSuccess := models.Response{
		Success: true,
		Message: "successfully deleted",
	}

	return &resSuccess, nil
}
