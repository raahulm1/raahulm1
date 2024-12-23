import axios from 'axios';
import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    hotel_name: '',
    email: '',
    password_hash: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/hotels/register', formData);
      setMessage(response.data);
    } catch (err) {
      setMessage('Error registering the hotel. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register Your Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Hotel Name:</label>
          <input
            type="text"
            name="hotel_name"
            value={formData.hotel_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password_hash"
            value={formData.password_hash}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
