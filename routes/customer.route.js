const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/customer.controller");

router.get("/list", CustomerController.list);
router.get("/details/:id", CustomerController.details);
router.post("/add", CustomerController.add);
router.patch("/update", CustomerController.update);
router.delete("/delete/:id", CustomerController.delete);

module.exports = router;
