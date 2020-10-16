import { postNewUser } from '../services/postNewUser';
import { addNewUser } from './addNewUser';
import { user } from '../components/Table';

export function sendInfo(firstName:string, lastName:string, participation:string, setFirstName:Function, setLastName:Function, setParticipation:Function, setListTable: Function, listTable:Array<user>){

  if(firstName === "" || lastName === "" || participation === ""){
    return alert("Por favor preencha todos os campos!")
  } else {  
    postNewUser(firstName, lastName, participation, setFirstName, setLastName, setParticipation, addNewUser, setListTable, listTable);
  }
}