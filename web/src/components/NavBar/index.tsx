import './styles.css'

import React from 'react';

import Input from '../Input';
import api from '../../services/api';

interface sendInformations {
  firstName: string;
  setFirstName: Function;
  
  lastName: string;
  setLastName: Function;

  participation: string;
  setParticipation: Function;
}

const NavBar:React.FunctionComponent<sendInformations> = ({ firstName, setFirstName, lastName, setLastName, participation, setParticipation, ...rest }) => {
  
  function sendInfo(){

    if(firstName === "" || lastName === "" || participation === ""){
     return alert("Por favor preencha todos os campos!")
    } else {  
      api.post('user', {
        firstName: firstName,
        lastName: lastName,
        participation: participation,
      }).then(() => {
        setFirstName("");
        setLastName("");
        setParticipation("");
        return alert('Dados gravados com sucesso');
      }).catch(err => console.log(err));
    }

  }
  return (
    <div className="navBarComponent">
      <Input value={firstName} setValue={setFirstName}  slug = "First name" name = "firstName"/>
      <Input value={lastName} setValue={setLastName}  slug = "Last Name" name = "lastName"/>
      <Input value={participation} setValue={setParticipation}  slug = "Participation" name = "participation"/>
      <button onClick={()=>sendInfo()} className="buttonSendNav">Send</button>
    </div>
  );
}

export default NavBar;
