package models

type User struct {
	ID       int    `json:"id" pg:",pk,unique,notnull"`
	Email    string `json:"email" pg:",pk,unique,notnull,select:email`
	Username string `json:"username"`
}

type NewUser struct {
	Email    string `json:"email"`
	Username string `json:"username"`
}
