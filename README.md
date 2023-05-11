# REST-API-NodeJS
This is a RESTful API that is built with Node.js and Express.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a MySQL database. The API is designed to be used with the Insomnia REST client.

Prerequisites

Before you can use this API, you will need to have the following software installed on your system:

Node.js
MySQL
Insomnia REST client
Getting started

To get started with this API, you will need to perform the following steps:

Clone the repository

git clone https://github.com/KlimentinaIvanova/REST-API-NodeJS.git

Install dependencies

cd REST-API-NodeJS
npm install

Set up the database

Create a MySQL database and table using the following commands:

CREATE DATABASE IF NOT EXISTS rest_api;
USE rest_api;

CREATE TABLE IF NOT EXISTS users (
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
email varchar(50) NOT NULL,
password varchar(50) NOT NULL,
PRIMARY KEY (id)
);

Set up the environment variables

Create a .env file in the root directory of the project and add the following variables:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=rest_api

Start the server

npm start

The server will start listening on port 5000

Using the API

To use the API, you will need to make requests to the endpoints using the Insomnia REST client.
