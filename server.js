const express = require('express');
const cors = require('cors');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hotels', hotelRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
