import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  let navigate = useNavigate();
    
    return (
        <div>
            <h2>Contact Us</h2>
            <form style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" />
                </div>
                <button type="submit">Send</button>
                <h1></h1>
                <h1></h1>
            </form>
                <button type="button" onClick={() => navigate(-1) }> Back </button>
                <button type="button" onClick={() => navigate('/aboutUs')}> Next </button>
        </div>
    );
}

export default ContactUs;