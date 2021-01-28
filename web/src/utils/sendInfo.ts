import { postNewUser } from '../services/postNewUser'
export function sendInfo (firstName:string, lastName:string, participation:string, setFirstName:Function, setLastName:Function, setParticipation:Function, setListTable: Function, setLoading:Function) {
  if (firstName === "" || lastName === "" || participation === "") {
    return alert("Por favor preencha todos os campos!")
  } else {
    postNewUser(firstName, lastName, participation, setFirstName, setLastName, setParticipation, setListTable, setLoading)
  }
}
