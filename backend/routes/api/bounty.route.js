const express = require("express");
const router = express.Router();
const bountyController = require("../../controllers/bounty.controller");

// /api/bounty/create
router.post("/create", bountyController.createBounty);

// /api/bounty/:id
router.post("/process", bountyController.processBounty);
router.get("/:id", bountyController.getBountyById);
router.delete("/:id", bountyController.deleteBountyById);
router.get("/", bountyController.getAllBounty);

module.exports = router;
