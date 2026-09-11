-- Tables which are saved per user within their directory.
CREATE TABLE IF NOT EXISTS states (
    stateID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    categoryID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL, -- income, expense, saving
    colorHex TEXT NOT NULL DEFAULT "#bbbbbb",
    iconSrc TEXT
);

CREATE TABLE IF NOT EXISTS goals (
    goalID INTEGER PRIMARY KEY AUTOINCREMENT,
    categoryIDFK INTEGER NOT NULL,
    month INTEGER NOT NULL,
    year INTEGER NOT NULL,
    limitAmount INTEGER,
    goalAmount INTEGER,
    FOREIGN KEY (categoryIDFK) REFERENCES categories(categoryID)
);

CREATE TABLE IF NOT EXISTS transactions (
    transactionID INTEGER PRIMARY KEY AUTOINCREMENT,
    stateIDFK INTEGER NOT NULL,
    categoryIDFK INTEGER NOT NULL,
    amount FLOAT NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (stateIDFK) REFERENCES states(stateID),
    FOREIGN KEY (categoryIDFK) REFERENCES categories(categoryID)
);