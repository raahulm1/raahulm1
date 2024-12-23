import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Register.js";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>QR Food Order</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </nav>

      {/* Website Description */}
      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome to QR Food Order!</h2>
          <p>
            QR Food Order simplifies the dining experience by allowing customers to 
            scan a QR code to access the menu, place orders directly from their table, 
            and notify the restaurant owner instantly. Convenient, fast, and efficient!
          </p>
        </section>

        {/* Register and Login Section */}
        <section className="auth-section">
          <h3>Get Started</h3>
          <div className="auth-buttons">
            <Link to="/Register" className="btn">Register</Link>
            <Link to="/login" className="btn">Login</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
