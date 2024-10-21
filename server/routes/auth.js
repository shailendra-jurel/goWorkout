// routes/auth.js

const express = require('express');
const User = require('../models/User'); // Ensure User model is correct
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;





























// // routes/auth.js
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const auth = require('../middleware/auth');
// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({
//       $or: [{ email }, { username }]
//     });

//     if (existingUser) {
//       return res.status(400).json({
//         message: 'User already exists with that email or username'
//       });
//     }

//     // Create new user
//     const user = new User({
//       username,
//       email,
//       password
//     });

//     await user.save();

//     // Create token
//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '24h' }
//     );

//     res.status(201).json({
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email
//       }
//     });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({
//       message: 'Error creating user',
//       error: error.message
//     });
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         message: 'Invalid email or password'
//       });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         message: 'Invalid email or password'
//       });
//     }

//     // Create token
//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '24h' }
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email
//       }
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({
//       message: 'Error logging in',
//       error: error.message
//     });
//   }
// });

// router.get('/me', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching user data',
//       error: error.message
//     });
//   }
// });

// module.exports = router;

// // routes/workouts.js
// const express = require('express');
// const Workout = require('../models/Workout');
// const auth = require('../middleware/auth');
// const router = express.Router();

// // Get all workouts for user
// router.get('/', auth, async (req, res) => {
//   try {
//     const workouts = await Workout.find({ userId: req.user.userId })
//       .sort({ date: -1 });
//     res.json(workouts);
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching workouts',
//       error: error.message
//     });
//   }
// });

// // Add new workout
// router.post('/', auth, async (req, res) => {
//   try {
//     const workout = new Workout({
//       ...req.body,
//       userId: req.user.userId
//     });
//     await workout.save();
//     res.status(201).json(workout);
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error creating workout',
//       error: error.message
//     });
//   }
// });

// // Update workout
// router.put('/:id', auth, async (req, res) => {
//   try {
//     const workout = await Workout.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.userId },
//       req.body,
//       { new: true }
//     );
//     if (!workout) {
//       return res.status(404).json({ message: 'Workout not found' });
//     }
//     res.json(workout);
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error updating workout',
//       error: error.message
//     });
//   }
// });

// // Delete workout
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const workout = await Workout.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.userId
//     });
//     if (!workout) {
//       return res.status(404).json({ message: 'Workout not found' });
//     }
//     res.json({ message: 'Workout deleted successfully' });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error deleting workout',
//       error: error.message
//     });
//   }
// });

// module.exports = router;