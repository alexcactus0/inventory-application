const db = require("../db/queries");
const path = require("path");

async function getItems(req, res) {
  const items = await db.getAllItems();
  console.log("Items: ", items);
  res.send("Usernames: " + items.map((item) => item.items).join(", "));
}

async function createItemGet(req, res) {
  res.sendFile(path.join(__dirname, "../views/form.html"));
}

async function createItemPost(req, res) {
  const { item } = req.body;
  await db.insertItem(item);
  res.redirect("/");
}

module.exports = {
  getItems,
  createItemGet,
  createItemPost,
};
