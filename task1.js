const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/task_manager', { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
    title: String,
    message: String, // New field for task messages
    left: Number,
    top: Number,
    created: { type: Date, default: Date.now }
  });
  

const Task = mongoose.model('Task', taskSchema);

// Create a new task
// Create a new task with a message
app.post('/api/tasks', async (req, res) => {
    try {
      const { title, message, left, top } = req.body;
      const task = new Task({ title, message, left, top });
      const savedTask = await task.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create the task.' });
    }
  });
  
  // Update a task, including the message
  app.put('/api/tasks/:taskId', async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const { title, message, left, top } = req.body;
      const updatedData = { title, message, left, top };
      const updatedTask = await Task.findByIdAndUpdate(taskId, updatedData, { new: true });
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the task.' });
    }
  });
  

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().exec();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks.' });
  }
});

// Update a task's position
app.put('/api/tasks/:taskId/position', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const { left, top } = req.body;
    const updatedPosition = { left, top };
    const updatedTask = await Task.findByIdAndUpdate(taskId, updatedPosition, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the task position.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
