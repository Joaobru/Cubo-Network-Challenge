import './styles.css'

import React from 'react'

import Input from '../Input'

import { user } from '../Table'
import { sendInfo } from '../../utils/sendInfo'

interface sendInformations {
  firstName: string;
  setFirstName: Function;

  lastName: string;
  setLastName: Function;

  participation: string;
  setParticipation: Function;

  listTable: Array<user>;
  setListTable: Function;

  setLoading: Function;
}

function NavBar ({ firstName, setFirstName, lastName, setLastName, participation, setParticipation, listTable, setListTable, setLoading }: sendInformations) {
  return (
    <div className="navBarComponent">
      <Input value={firstName} setValue={setFirstName} slug = "First name" name = "firstName" type="text"/>
      <Input value={lastName} setValue={setLastName} slug = "Last Name" name = "lastName" type="text"/>
      <Input value={participation} setValue={setParticipation} slug = "Participation" name = "participation" type="number"/>
      <button
      onClick={() =>
        sendInfo(firstName, lastName, participation, setFirstName,
          setLastName, setParticipation, setListTable, setLoading)}
      className="buttonSendNav">Send</button>
    </div>
  )
}

export default NavBar
