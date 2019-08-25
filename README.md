# API - GraphQL

Criando exemplo pratico sobre GraphQL do canal Cod3r Cursos:

- commit 1: Aula 01
- commit 2: Aula 02 e 03

Para executar o projeto é necessario instala as dependencias, depois altere os dados do banco no arquivo ```src/knexfile.js``` e logo em seguida crie as migrations com o comando ```knex migrate:lastest```, por fim e execute o server com ```node server.js``` 

Codigo de exemplo para consulta:
```
query {
  getUsers{
    nome
  }
  getUser(id: 2){
		id nome email
  }
}
```

Codigo de exemplo para insert:
```
mutation {
  createUser(input: {
    name: "teste",
    email: "teste@gmail.com",
    password: "teste"
  }){
    name email
  }
}
```

*Link da Playlist*: https://www.youtube.com/watch?v=0WWuJaNSFgk&list=PLdPPE0hUkt0okslA6u6hXw_2wQ6WM4d2-