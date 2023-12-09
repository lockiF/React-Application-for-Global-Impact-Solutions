import React from 'react';
import './Team.css';

function Team() {
    return (
        <div className='team-container'>
            <h2>OUR SPECIALIST</h2>

            <div className='team-category'>
                <h3>FRONT-END</h3>
                <div className='team-members'>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Front=End Specialist 1"/>
                        <p>Name 1</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Front=End Specialist 2"/>
                        <p>Name 2</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Front=End Specialist 3"/>
                        <p>Name 3</p>
                    </div>
                </div>
            </div>

            <div className='team-category'>
                <h3>UI/UX DESIGN</h3>
                <div className='team-members'>
                <div className='team-member'>
                        <img src = "employee.png" alt="UI/UX Designer 1"/>
                        <p>Name 4</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="UI/UX Designer 2"/>
                        <p>Name 5</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="UI/UX Designer 3"/>
                        <p>Name 6</p>
                    </div>
                </div>
            </div>

            <div className='team-category'>
                <h3>BACK-END</h3>
                <div className='team-members'>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Back-End Specialist 1"/>
                        <p>Name 7</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Back-End Specialist 2"/>
                        <p>Name 8</p>
                    </div>
                    <div className='team-member'>
                        <img src = "employee.png" alt="Back-End Specialist 3"/>
                        <p>Name 9</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Team;
