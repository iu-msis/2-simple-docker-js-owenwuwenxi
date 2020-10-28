CREATE DATABASE msis;

USE msis;

DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
    commentID INTEGER PRIMARY KEY AUTO_INCREMENT,
    commentText TEXT NOT NULL

);

INSERT INTO Comments (commentText) VALUES
("I have something important to say"),
("D&S is awesome"),
("😁");

SELECT * FROM Comments;