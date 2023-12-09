
import React from 'react';
import './Services.css';

function Services() {
    return(
        <div className="services-container">
            <h2>Our Services</h2>

            <div className="service">
                <img src="tech.jpg" alt="Service 1" />
                <div className="service-details">
                <h3>Web Development</h3>
                <p>
                    We specialize in creating responsive and user-friendly websites that cater to your unique business needs.
                    From front-end design to back-end functionality, we've got your web development covered.
                </p>
            </div>
        </div>

        <div className="service">
        <img src="tech.jpg" alt="Service 2" />
        <div className="service-details">
            <h3>Digital Marketing</h3>
            <p>
            Boost your online presence with our comprehensive digital marketing services. From SEO strategies
            to social media campaigns, we help you connect with your target audience and drive results.
            </p>
            </div>
        </div>
    </div>
    );
}

export default Services;