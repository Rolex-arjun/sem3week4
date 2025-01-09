const express = require('express');
const Image = require('../models/Image');
const axios = require('axios'); // For AI API calls

const router = express.Router();

// Generate Image
router.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    // Call AI API (replace with actual API like DALL·E)
    const imageUrl = `https://via.placeholder.com/300.png?text=${encodeURIComponent(prompt)}`;
    
    // Save to MongoDB
    const newImage = new Image({ prompt, imageUrl });
    await newImage.save();

    res.status(200).json(newImage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

// Get All Images
router.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports = router;
