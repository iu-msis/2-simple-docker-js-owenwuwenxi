CREATE DATABASE msis;

USE msis;

CREATE TABLE Comments (
    commentId INTEGER PRIMARY KEY AUTO_INCREMENT,
    commentText TEXT NOT NULL

);

INSERT INTO Comments (commentText) VALUES
("I have something important to say"),
("D&S is awesome"),
("😁");

SELECT * FROM Comments;
