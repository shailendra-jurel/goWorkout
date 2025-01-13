// routes/tasks.js
import  express from 'express';
import Task from '../models/Task';
import auth   from '../middleware/auth';
const router = express.Router();
// Get tasks
// router.get('/', auth, async (req, res) => {
  router.get('/', async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});
// Add task
// router.post('/', auth, async (req, res) => {
  router.post('/', async (req, res) => {
  const { date, tasks } = req.body;
  const newTask = new Task({ userId: req.user.id, date, tasks });
  await newTask.save();
  res.status(201).json(newTask);
});
export default router;
