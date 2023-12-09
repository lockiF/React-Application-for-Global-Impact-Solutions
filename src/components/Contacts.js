import React from 'react'; import './Contact.css';
function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label html for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label html for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                    <strong>Email:</strong> info@example.com
                </p> 
                <p>
                    <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p>
                    <strong>Address:</strong> 123 Main Street, Cityville, Country
                </p>
            </div>
        </div>
    );
}

export default Contact;