const db = require("../data/config");

function find() {
	return db("schemes");
}

function findById(id) {
	return db("schemes").where("id", id).first();
}

function findSteps(id) {
    return db("schemes as s")
        .where("s.id", id).join("steps as st", "st.scheme_id", "s.id")
        .select("s.id", "s.scheme_name", "st.step_number", "st.instructions")
        .orderBy('st.step_number', 'asc')
}

function add(schemeData) {
    return db("schemes as s").insert(schemeData)
}

function addStep(id, stepData) {
    return db("schemes as s").where("id", id).insert(stepData)
}

function update(changes, id) {
    return db("schemes as s").where("id", id).update(changes)
}

function remove(id) {
    return db("schemes as s").where("id", id).del()
}

module.exports = {
	find,
	findById,
	findSteps,
    add,
    addStep,
	update,
	remove,
};