# T3 Arquitectura emergentes

## Introduction

This project is built following the Hexagonal Architecture (also known as Ports and Adapters) pattern. It is currently developed using Node.js, Express.js, and SQLite as the database.

## Hexagonal Architecture
![arqutiecturaHexagonal](https://github.com/f-ulloa/T3/assets/67931071/000637a0-af17-4d29-943f-85c18cb5f5ab)

Hexagonal Architecture is an architectural pattern that helps in maintaining the separation of concerns within an application. This pattern enables us to isolate the core logic of the application from the peripheral concerns like the user interface and data persistence. The core logic is at the center of the application and is surrounded by a series of ports and adapters (hence the name Ports and Adapters).

### Advantages

1. **Decoupling**: The hexagonal architecture promotes decoupling, where the business logic does not depend on the database or external services. This makes the code easier to maintain.

2. **Testability**: It is easier to write tests for the business logic without the need for the database or external services.

3. **Scalability**: The business logic can scale independently of the database and vice versa.

4. **Flexibility**: The application becomes agnostic to the delivery mechanisms. It can be exposed through a web application, a CLI, or even a scheduled job without changing the core logic.

5. **Exchangeability**: It's simple to replace a database, library, or any external service without affecting the business logic.

6. **Clean Code and Maintenance**: This architecture leads to more clean and maintainable code. It's clear where each piece of code should reside.

## Current Stack

- **Node.js**: As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

- **Express.js**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- **SQLite**: SQLite is a C library that provides a lightweight disk-based database and that doesn’t require a separate server process and allows access to the database using a nonstandard variant of the SQL query language.

## How to Run

### Local Development

1. Clone the repository.
2. Go into the project directory.
3. Run `npm install` to install all the dependencies.
4. Run `npm start` to start the application.
5. Access the application through `http://localhost:3000`.
6. The Swagger documentation for the endpoints can be found at `http://localhost:3000/api-docs/`.

### Production

1. The application is deployed in production and can be accessed through this URL: [https://t3-snqy.onrender.com/](https://t3-snqy.onrender.com/).
2. The Swagger documentation for the endpoints in production can be found at [https://t3-snqy.onrender.com/api-docs/](https://t3-snqy.onrender.com/api-docs/).
