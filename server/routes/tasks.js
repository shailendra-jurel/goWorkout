// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth'); // Create auth middleware

const router = express.Router();

// Get tasks
router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// Add task
router.post('/', auth, async (req, res) => {
  const { date, tasks } = req.body;

  const newTask = new Task({ userId: req.user.id, date, tasks });
  await newTask.save();
  res.status(201).json(newTask);
});

module.exports = router;
