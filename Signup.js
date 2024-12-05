import React, { useState } from 'react';
import "./Signup.css";

const Signup=()=>{
    const [formData,setFormData]=useState({
        username: '',
    email: '',
    password: '',
    confirmPassword: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Form submitted:', formData);
      };
    return(
<div className='Signup-form'>
    <div className='Signup-container'>
        <h2>Signup</h2>
        <p>Already have an account? <a href="#">Login</a></p>
        <form onSubmit={handleSubmit}>
            <input type="text"
                    name="username"
                    placeholder='username'
                    value={formData.username}
                    onChange={handleChange}
                    required
            />
            <input type="text"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
           <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <div className='social-login'></div>
        <p>or login with</p>
        <div className="social-buttons">
            <button className="facebook">Facebook</button>
            <button className="google">Google</button>
            <button className="twitter">Twitter</button>
          </div>
    </div>
</div>
    )
} 
export default Signup;  