export function filteredName (list:any, setState:any) {
  let obj = [list[0].firstName + " " + list[0].lastName]

  for (let i = 1; i < list.length; i++) {
    obj = [...obj, list[i].firstName + " " + list[i].lastName]
  }

  setState(obj)
}
