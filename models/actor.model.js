const db = require("../utils/db");

module.exports.finnAll = () => {
  return db("actor");
};

module.exports.findById = async (id) => {
  let rows = await db("actor").where("actor_id", id);

  if (rows.length === 0) {
    return null;
  }
  return rows[0];
};

module.exports.add = async (actor) => {
  let affectedRows = await db("actor").insert(actor);

  return affectedRows;
};

module.exports.update = async (id, actor) => {
  let affectedRows = await db("actor").where({ actor_id: id }).update(actor);

  return affectedRows;
};

module.exports.delete = async (id) => {
  let affectedRows = await db("actor").where("actor_id", id).del();

  return affectedRows;
};
