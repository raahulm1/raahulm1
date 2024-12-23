const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

/**
 * Register a new hotel.
 */
router.post('/register', async (req, res) => {
  const { hotel_name, email, password } = req.body;

  if (!hotel_name || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  try {
    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert hotel into the database
    const query = 'INSERT INTO Hotels (hotel_name, email, password_hash) VALUES (?, ?, ?)';
    db.query(query, [hotel_name, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Database Error:', err.message);
        return res.status(500).send('Error registering the hotel');
      }
      res.status(201).send('Hotel registered successfully');
    });
  } catch (err) {
    console.error('Internal Server Error:', err.message);
    res.status(500).send('Internal server error');
  }
});

/**
 * Login a hotel owner.
 */
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Debugging: Log incoming request data
    console.log('Login Request Data:', { email, password });
  
    if (!email || !password) {
      return res.status(400).send({ message: 'Email and password are required' });
    }
  
    try {
      const query = 'SELECT * FROM Hotels WHERE email = ?';
      db.query(query, [email], async (err, results) => {
        if (err) {
          console.error('Database Query Error:', err.message);
          return res.status(500).send({ message: 'Internal server error' });
        }
  
        // Debugging: Check if email exists in the database
        console.log('Query Results:', results);
  
        if (results.length === 0) {
          return res.status(401).send({ message: 'Invalid email or password' });
        }
  
        const hotel = results[0];
        const isPasswordMatch = await bcrypt.compare(password, hotel.password_hash);
  
        // Debugging: Check password match result
        console.log('Password Match:', isPasswordMatch);
  
        if (!isPasswordMatch) {
          return res.status(401).send({ message: 'Invalid email or password' });
        }
  
        res.status(200).send({ message: 'Login successful', hotel_name: hotel.hotel_name });
      });
    } catch (err) {
      console.error('Server Error:', err.message);
      res.status(500).send({ message: 'Internal server error' });
    }
  });
  