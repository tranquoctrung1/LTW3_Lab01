const express = require("express");
const router = express.Router();
const ActorController = require("../controllers/actor.controller");

router.get("/list", ActorController.list);
router.get("/details/:id", ActorController.details);
router.post("/add", ActorController.add);
router.patch("/update", ActorController.update);
router.delete("/delete/:id", ActorController.delete);

module.exports = router;
