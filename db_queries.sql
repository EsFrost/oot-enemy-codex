DROP TABLE IF EXISTS monsters;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS drops;

CREATE TABLE monsters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    navi_text TEXT,
    hp INT,
    damage INT,
    dot INT,
    location TEXT,
    weakness TEXT,
    strength TEXT,
    image_url TEXT,
);

CREATE TABLE drops (
    id SERIAL PRIMARY KEY,
    item TEXT,
    amount TEXT,
    rate FLOAT
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    group_id INT,
    drop_id INT,
    monster_id INT,
    FOREIGN KEY (drop_id) REFERENCES drops(id),
    FOREIGN KEY (monster_id) REFERENCES monsters(id)
);