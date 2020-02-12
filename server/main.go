package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
	"github.com/go-chi/chi"
	"github.com/go-pg/pg/v9"
	"github.com/rs/cors"

	// dataloaders "github.com/rsbear/goplay/dataloaders"
	database "github.com/rsbear/goplay/db"
	gen "github.com/rsbear/goplay/generated"
	resolver "github.com/rsbear/goplay/resolvers"
)

const (
	defaultPort = ":8080"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	opt, err := pg.ParseURL("postgres://test:test@localhost/goplay_db_dev?sslmode=disable")
	if err != nil {
		panic("connectiong string failed")
	}
	db := pg.Connect(opt)
	defer db.Close()

	error := database.Seed(db)
	if error != nil {
		panic(error)
	}

	r := chi.NewRouter()

	r.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	r.Route("/graphql", func(r chi.Router) {
		// Initialize the dataloaders as middleware into our route
		// r.Use(dataloaders.NewMiddleware(db)...)

		schema := gen.NewExecutableSchema(gen.Config{
			Resolvers: &resolver.Resolver{
				DB: db,
			},
			Directives: gen.DirectiveRoot{},
			Complexity: gen.ComplexityRoot{},
		})

		h := handler.GraphQL(
			schema,
			// handler.ComplexityLimit(100),
		)
		r.Post("/", h)

		// Playground: http://localhost:8080/graphql/playground
		playground := handler.Playground("Interactive Playground", "/graphql")
		r.Get("/playground", playground)

	})

	log.Println(" http://localhost:8080/graphql for your client")
	log.Println(" http://localhost:8080/graphql/playground for GraphQL playground")
	panic(http.ListenAndServe(port, r))

	// schema := gen.NewExecutableSchema(gen.Config{
	// 	Resolvers: &resolver.Resolver{
	// 		DB: db,
	// 	},
	// 	Directives: gen.DirectiveRoot{},
	// 	Complexity: gen.ComplexityRoot{},
	// })

	// http.Handle("/playground", handler.Playground("GraphQL playground", "/graphql"))
	// http.Handle("/graphql", handler.GraphQL(schema))

	// log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	// log.Fatal(http.ListenAndServe(":"+port, nil))
}
