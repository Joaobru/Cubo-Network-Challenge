import api from './api'

export const getListData = async (setListTable:Function, setLoading: Function) => {
  const user = await api.get('/user')

  setListTable(user.data)
  setLoading(false)
}
