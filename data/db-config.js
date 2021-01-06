const knex = require("knex")
const knexfiloe = require("../knexfile")

module.exports = knex(knexfile.development)
