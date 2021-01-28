import { user } from '../components/Table'

export function addNewUser (setState:Function, list:Array<user>, firstName:string, lastName:string, participation:string) {
  const id = list.length + 1
  setState([...list, { id, firstName, lastName, participation }])
}
