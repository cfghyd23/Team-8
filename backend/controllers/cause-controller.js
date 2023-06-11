const mongoose = require('mongoose');
const Cause = require('../models/Cause');

// Create a cause
exports.createCause = async (req, res) => {
  try {
    const { segment, target, mentor, status, tasks , user, collected, days } = req.body;
    
    

    // Create a new cause
    const cause = await Cause.create({
      segment,
      user, // Assuming the authenticated user's ID is stored in req.user._id
      target,
      collected,
      days,
      mentor,
      status,
      tasks,
    });

    res.status(201).json(cause);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

// Get all causes
exports.getAllCauses = async (req, res) => {
  try {
    const causes = await Cause.find().populate('user', 'name email').populate('mentor', 'name email');
    res.status(200).json(causes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single cause by ID
exports.getCauseById = async (req, res) => {
  try {
    const cause = await Cause.findById(req.params.id).populate('user', 'name email').populate('mentor', 'name email');
    if (!cause) {
      return res.status(404).json({ error: 'Cause not found' });
    }
    res.status(200).json(cause);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a cause by ID
exports.updateCauseById = async (req, res) => {
  try {
    const { segment, target, mentor, status, tasks } = req.body;

    const cause = await Cause.findByIdAndUpdate(
      req.params.id,
      {
        segment,
        target,
        mentor,
        status,
        tasks,
      },
      { new: true }
    );

    if (!cause) {
      return res.status(404).json({ error: 'Cause not found' });
    }

    res.status(200).json(cause);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a cause by ID
exports.deleteCauseById = async (req, res) => {
  try {
    const cause = await Cause.findByIdAndRemove(req.params.id);
    if (!cause) {
      return res.status(404).json({ error: 'Cause not found' });
    }
    res.status(200).json({ message: 'Cause deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.donate = async (req, res) => {
  try {
    const { amount, email, id } = req.body;
    const cause = await Cause.findById(id);
    console.log(cause);
  } catch (error) {
    res.send(404).json({ error: error.message });
  }
};
