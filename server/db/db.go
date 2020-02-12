package db

import (
	"sync"
	"time"

	"github.com/go-pg/pg/v9"
	"github.com/go-pg/pg/v9/orm"
	"github.com/rsbear/goplay/models"
	"github.com/theckman/yacspin"
)

type DB interface{}

var once sync.Once

func Seed(db *pg.DB) error {
	if err := createSchemas(db); err != nil {
		return err
	}

	if err := seedUsers(db); err != nil {
		return err
	}

	return nil
}

func createSchemas(db *pg.DB) error {
	spinner, _ := yacspin.New(yacspin.Config{
		Delay:         100 * time.Millisecond,
		CharSet:       yacspin.CharSets[59],
		Suffix:        " Hydrating Schema",
		StopMessage:   "Complete",
		Message:       "",
		StopCharacter: "✓",
		StopColors:    []string{"fgGreen"},
	})
	spinner.Start()
	for _, model := range []interface{}{
		(*models.User)(nil),
		(*models.Auth)(nil)} {
		err := db.CreateTable(model, &orm.CreateTableOptions{
			IfNotExists:   true,
			Temp:          false,
			FKConstraints: true,
		})
		if err != nil {
			return err
		}
	}
	spinner.Stop()
	return nil
}

func seedUsers(db *pg.DB) error {
	spinner, _ := yacspin.New(yacspin.Config{
		Delay:         100 * time.Millisecond,
		CharSet:       yacspin.CharSets[59],
		Suffix:        " Hydrating Users ",
		StopMessage:   "Complete",
		Message:       "",
		StopCharacter: "✓",
		StopColors:    []string{"fgGreen"},
	})
	spinner.Start()

	users := []models.User{
		{
			Email:    "tester@tester.com",
			Username: "rsbear",
		},
		{
			Email:    "rsbear@gmail.com",
			Username: "tester",
		},
		{
			Email:    "baby.yoda@gmail.com",
			Username: "Baby",
		},
	}

	for _, model := range users {
		var user models.User
		if err := db.Model(&user).Where("email = ?", model.Email).Select(); err != nil {
			if err := db.Insert(&model); err != nil {
				return err
			}
		}
	}
	spinner.Stop()
	return nil
}
