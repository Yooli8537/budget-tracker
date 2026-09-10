-- Tables which are saved per user within their directory.
CREATE TABLE IF NOT EXISTS states (
    stateID INT PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    categoryID INT PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL, -- income, expense, saving
    colorHex TEXT NOT NULL DEFAULT "#bbbbbb",
    iconSrc TEXT
);

CREATE TABLE IF NOT EXISTS goals (
    goalID INT PRIMARY KEY AUTOINCREMENT,
    categoryIDFK INT NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    limitAmount INT,
    goalAmount INT,
    FOREIGN KEY (categoryIDFK) REFERENCES categories(categoryID)
);

CREATE TABLE IF NOT EXISTS transactions (
    transactionID INT PRIMARY KEY AUTOINCREMENT,
    stateIDFK INT NOT NULL,
    categoryIDFK INT NOT NULL,
    amount FLOAT NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (stateIDFK) REFERENCES states(stateID),
    FOREIGN KEY (categoryIDFK) REFERENCES categories(categoryID)
);