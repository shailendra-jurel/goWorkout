// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  tasks: [
    {
      name: { type: String, required: true },
      duration: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Task', taskSchema);
