const express = require('express');
const router = express.Router();
const checkinController = require('../../controllers/checkin.controller');

// /api/checkin/:id
router.post('/:id', checkinController.checkIn);
router.get('/:id', checkinController.getCountByID);

module.exports = router;