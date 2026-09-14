const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

router.get("/", userController.getHomepage);
router.get("/current-items", userController.getItems);
router.get("/add-item", userController.createItemGet);
router.get("/add-item", userController.createItemPost);

module.exports = router;
