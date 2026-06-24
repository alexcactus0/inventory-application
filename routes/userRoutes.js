const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

router.get("/", userController.getItems);
router.get("create_item", userController.createItemGet);
router.get("create_item", userController.createItemPost);
