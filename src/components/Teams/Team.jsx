// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Team.css';
import Founder from '../../assets/Farhan.JPG'
import CEO from '../../assets/arbaz.jpg'
import CFO from '../../assets/Atik.JPG'

// eslint-disable-next-line react/prop-types
const TeamCard = ({ name, title, image, linkedin, className }) => {
    return (
        <div className={`team ${className}`}>
            <img src={image} alt={`${name}`} className="team-img" />
            <div className="team-body">
                <h3>{name}</h3>
                <p>{title}</p>
                <div className="social-links">
                    {linkedin && (<a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

function App() {
    const teamMembers = [
        {
            name: 'Farhan Hashmi',
            title: 'Founder & CEO',
            image: Founder,
            // linkedin: 'https://linkedin.com/in/farhan-hashmi-29460023b/',
            className: '',
        },
        {
            name: 'Arbaz Khan',
            title: 'CEO',
            image: CEO,
            // linkedin: 'https://www.linkedin.com/in/arbaz-khan-b063171ab/',
            className: 'middle-card',
        },
        {
            name: 'Atik Uddin',
            title: 'CFO',
            image: CFO,
            // linkedin: 'https://www.linkedin.com/in/atik',
            className: '',
        }
    ];

    return (
        <div className="Team">
            <h1>Our Team</h1>
            <div className="team-container">
                {teamMembers.map(member => (
                    <TeamCard
                        key={member.name}
                        name={member.name}
                        title={member.title}
                        image={member.image}
                        linkedin={member.linkedin}
                        className={member.className}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
