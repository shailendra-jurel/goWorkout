// models/Task.js
import mongoose from 'mongoose';

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

export default mongoose.model('Task', taskSchema);
