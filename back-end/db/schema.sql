DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

\c test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

