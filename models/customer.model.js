const db = require("../utils/db");

module.exports.finnAll = () => {
  return db("customer");
};

module.exports.findById = async (id) => {
  let rows = await db("customer").where("customer_id", id);

  if (rows.length === 0) {
    return null;
  }
  return rows[0];
};

module.exports.add = async (customer) => {
  let affectedRows = await db("customer").insert(customer);

  return affectedRows;
};

module.exports.update = async (id, customer) => {
  let affectedRows = await db("customer")
    .where({ customer_id: id })
    .update(customer);

  return affectedRows;
};

module.exports.delete = async (id) => {
  let affectedRows = await db("customer").where("customer_id", id).del();

  return affectedRows;
};
