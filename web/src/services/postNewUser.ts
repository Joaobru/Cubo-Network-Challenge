import { getListData } from '../services/getListData'

import api from './api'

export const postNewUser = async (firstName: string, lastName: string, participation: string, setFirstName:Function, setLastName:Function, setParticipation:Function, setListTable:Function, setLoading: Function) => {
  await api.post('/user', { firstName: firstName, lastName: lastName, participation: participation })

  setFirstName('')
  setLastName('')
  setParticipation('')

  getListData(setListTable, setLoading)

  return alert('Dados gravados com sucesso')
}
