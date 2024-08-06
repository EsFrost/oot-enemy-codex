DROP TABLE IF EXISTS enemy_npcs;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS drops;

CREATE TABLE enemy_npcs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    health INT,
    attack INT
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

CREATE TABLE drops (
    id SERIAL PRIMARY KEY,
    enemy_npc_id INT,
    item_id INT,
    drop_rate INT,
    quantity INT,
    FOREIGN KEY (enemy_npc_id) REFERENCES enemy_npcs(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
);