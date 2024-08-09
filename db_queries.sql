DROP TABLE IF EXISTS monsters CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS drops CASCADE;
DROP TABLE IF EXISTS groups_drops CASCADE;

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
    monster_id INT,
    FOREIGN KEY (monster_id) REFERENCES monsters(id)
);

CREATE TABLE groups_drops (
    id INT PRIMARY KEY,
    group_id INT,
    drop_id INT,
    FOREIGN KEY (group_id) REFERENCES groups(id),
    FOREIGN KEY (drop_id) REFERENCES drops(id)
);