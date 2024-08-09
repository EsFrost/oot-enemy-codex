const { pool } = require('../utils/db')

// Returns everything for front page
function getAll() {
    return pool.query(`SELECT * FROM monsters`)
}

// Might remove search and individualCard to reduce requests

// For the search bar
function search(param) {
    // Ensure param is a string for LIKE queries
    const likePattern = `%${param}%`
    // Convert param to integer if you are expecting an integer id
    const id = parseInt(param, 10)
    const values = [likePattern, isNaN(id) ? null : id]

    const query = `SELECT * FROM monsters WHERE name LIKE $1 OR boss_text LIKE $1 OR id = $2`
    return pool.query(query, values)
}

// When clicking on a card
function individualCard(id) {
    return pool.query(`SELECT * FROM monsters WHERE id = $1`, [id])
}

// Filling the card's data if available
function availableDetails(id) {
    return pool.query(`SELECT d.item, d.amount, d.rate FROM groups_drops gd
JOIN groups g ON gd.group_id = g.id
JOIN drops d ON gd.drop_id = d.id
JOIN monsters m ON g.monster_id = m.id
WHERE m.id = $1`, [id])
}

module.exports = {
    getAll,
    search,
    individualCard,
    availableDetails
}