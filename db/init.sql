CREATE TABLE users_simulation3 (
    id SERIAL PRIMARY KEY,
    auth0_sub TEXT NOT NULL,
    name TEXT NOT NULL,
    picture TEXT,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    gender TEXT,
    hairColor TEXT,
    eyeColor TEXT,
    hobby TEXT,
    birthDay INTEGER,
    birthMonth INTEGER,
    birthYear INTEGER,
    friendId integer[]
);