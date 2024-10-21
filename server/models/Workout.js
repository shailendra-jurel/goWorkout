// models/Workout.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true
    },
    sets: {
    type: Number,
    required: true,
    min: 0
    },
    reps: {
    type: Number,
    required: true,
    min: 0
},
    weight: {
    type: Number,
    required: true,
    min: 0
    },
    duration: {
    type: Number,
    required: true,
    min: 0
  },
  notes: String
});

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['gym', 'home', 'cardio', 'meditation']
  },
  exercises: [exerciseSchema],
  notes: String,
  duration: Number,
  feeling: {
    type: String,
    enum: ['great', 'good', 'okay', 'bad']
  }
}, {
  timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;