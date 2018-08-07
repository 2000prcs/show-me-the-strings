CREATE DATABASE strings;

\connect strings;

CREATE SCHEMA strings;

CREATE TABLE strings (
  id SERIAL PRIMARY KEY,
  string TEXT,
  createdAt timestamp with time zone
);