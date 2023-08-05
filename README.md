<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Executing in development

1. Clone the repository
2. Run ```npm install```
3. Install Nest CLI ```npm install -g @nestjs/cli```
4. Load and run the database ```docker-compose up -d```
5. Clone the file __.env.template__ and rename the copy to __.env__. Then fill the environment
   variables of the file with your values
6. Run the app with ```npm run start:dev```
7. Populate the database with the seed ```http://localhost:3000/api/v2/seed```

## Stack usado

* MongoDB
* Nest