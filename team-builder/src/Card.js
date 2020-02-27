import React from 'react';

const Card = props => {
    return (
        <div>
            {props.team.map(member => (
                <div key={member.name}>
                    <h2>{member.name}</h2>
                    <h4>{member.email}</h4>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;