const db = require("../db/queries");
const path = require("path");

function getHomepage(req, res) {
  res.render("home");
}

async function getItems(req, res) {
  const items = await db.getAllItems();
  res.send("Usernames: " + items.map((i) => i.item).join(", "));
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
  getHomepage,
  getItems,
  createItemGet,
  createItemPost,
};
