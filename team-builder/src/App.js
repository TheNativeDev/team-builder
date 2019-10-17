import React, {useState} from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([{
    name: 'Leza Jackson',
    email: 'leza.jackson78@gmail.com',
    role: 'Frontend'
  }]);


  const addMember = member =>{
    setMembers([ member, ...members]);
  };

  return (
      <div>
        <Form addMember={addMember}/>
        <TeamMembers  members={members}/>
      </div>
  );
}

export default App;