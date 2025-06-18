const express = require('express');
const router = express.Router();
const MajorProject = require('../models/majorProject'); // make sure your model file is named Major.js

// GET /api/major-projects
router.get('/major-projects', async (req, res) => {
    try {
        const projects = await MajorProject.find({});
        const freeProjects = projects.slice(0, 3); // only show first 3
        res.json(freeProjects);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
