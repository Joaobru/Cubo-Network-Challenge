import { user } from '../components/Table';

import api from './api';

export const postNewUser = async (firstName: string, lastName: string, participation: string, setFirstName:Function, setLastName:Function, setParticipation:Function, addNewUser:Function, setListTable:Function, listTable: Array<user>) => {

  await api.post('/user', { firstName: firstName, lastName: lastName, participation: participation, });

  setFirstName("");
  setLastName("");
  setParticipation("");
  addNewUser(setListTable, listTable, firstName, lastName, participation);

  return alert('Dados gravados com sucesso');
}