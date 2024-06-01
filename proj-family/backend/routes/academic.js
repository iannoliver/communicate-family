const express = require('express');
const AcademicInfo = require('../models/AcademicInfo');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/student/:id', auth, async (req, res) => {
  try {
    const info = await AcademicInfo.findOne({ studentId: req.params.id });
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
