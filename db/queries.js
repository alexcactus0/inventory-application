const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function insertItem(item, category_id) {
  await pool.query("INSERT INTO items (item) VALUES ($1, $2)", [
    item,
    category_id,
  ]);
}

module.exports = {
  getAllItems,
  insertItem,
};
