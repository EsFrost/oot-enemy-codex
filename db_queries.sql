DROP TABLE IF EXISTS monsters CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS drops CASCADE;

CREATE TABLE monsters (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    boss_text TEXT,
    navi_text TEXT,
    hp INT,
    damage INT,
    dot INT,
    weakness TEXT,
    strength TEXT,
    image_url TEXT
);

CREATE TABLE drops (
    id INT PRIMARY KEY,
    item TEXT,
    amount TEXT,
    rate FLOAT
);

CREATE TABLE groups (
    id INT PRIMARY KEY,
    group_id INT,
    drop_id INT,
    monster_id INT,
    FOREIGN KEY (drop_id) REFERENCES drops(id),
    FOREIGN KEY (monster_id) REFERENCES monsters(id)
);