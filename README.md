# DesafioMinhasAudienciasBack

API for DesafioMinhasAudienciasFront

## Install

Run `npm install`

## Development server

Run `npm start` for a dev server.  `http://localhost:3001/`. 

## Routes

- POST `http://localhost:3001/login` To get JWT token

- GET `http://localhost:3001/users/me` Verify token and get logged user data

- GET `http://localhost:3001/users` List all users

- GET `http://localhost:3001/users/user/:id` Get a user by id

- GET `http://localhost:3001/users/filter` Filter users by name

- DELETE `http://localhost:3001/users/:id` Delete a user by id

- POST `http://localhost:3001/users` Insert a new user

- PATCH `http://localhost:3001/users/:id` Edit a user by id


