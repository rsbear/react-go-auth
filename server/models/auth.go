package models

type Auth struct {
	ID     int    `json:"id" pg:",pk,unique,notnull"`
	Email  string `json:"email" pg:",pk,unique,notnull,select:email`
	Secret string `json:"username"`
}

type NewAuth struct {
	Email string `json:"email"`
}
