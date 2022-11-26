const express = require("express");
const router = express.Router();
const adoptantesController = require("../controllers/adoptantes.controller");

router.post("/", adoptantesController.create);
router.get("/", adoptantesController.find);
router.get("/:id", adoptantesController.findOne);
router.put("/:id", adoptantesController.update);
router.delete("/:id", adoptantesController.remove)

module.exports = router;