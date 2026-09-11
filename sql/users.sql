-- Is created once upon launching the app for the first time.
CREATE TABLE IF NOT EXISTS users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    isAdmin BOOLEAN NOT NULL,
    username TEXT NOT NULL UNIQUE,
    salt TEXT NOT NULL,
    hashword TEXT NOT NULL
);