const db = require("../../data/db-config")

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes")
    .where("id", id)
    .first()
}

function findSteps(id){
  return db("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id)
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number")
}

async function add(scheme) {
  const newScheme = await db("schemes")
    .insert(scheme)

  return findById(newScheme[0])
}

async function update(changes, id){
  await db("schemes")
    .update(changes)
    .where("id", id)

  return findById(id)
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
}
