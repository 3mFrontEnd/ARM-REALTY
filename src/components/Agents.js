import React from 'react';
import './Agents.css'; 
import agent1Image from '../assets/a1.jpg';
import agent2Image from '../assets/a2.jpg';
import agent3Image from '../assets/a3.jpg';
import agent4Image from '../assets/a4.jpg';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'Agent 1',
      email: 'agent1@example.com',
      phone: '123-456-7890',
      image: agent1Image,
    },
    {
      id: 2,
      name: 'Agent 2',
      email: 'agent2@example.com',
      phone: '987-654-3210',
      image: agent2Image,
    }, {
      id: 1,
      name: 'Agent 3',
      email: 'agent1@example.com',
      phone: '123-456-7890',
      image: agent3Image,
    },
    {
      id: 2,
      name: 'Agent 4',
      email: 'agent2@example.com',
      phone: '987-654-3210',
      image: agent4Image,
    },

  ];

  return (
    <div className="agents">
      <h2>Our Agents</h2>
      <ul className="agent-list">
        {agents.map((agent) => (
          <li key={agent.id} className="agent-item">
            <div className="agent-image">
              <img src={agent.image} alt={agent.name} />
            </div>
            <div className="agent-details">
              <h3>{agent.name}</h3>
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agents;
