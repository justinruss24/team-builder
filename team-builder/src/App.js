import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  }
  return (
    <div className="App">
      <header>
        <Form addNewMember={addNewMember} />
      </header>
      <div>
        <h1>My Team</h1>
        <Card team={team}/>
      </div>
    </div>
  );
}

export default App;
