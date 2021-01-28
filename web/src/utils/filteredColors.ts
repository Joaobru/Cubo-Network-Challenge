export function filteredColors (list:any, setState:any) {
  let obj = [list[0].color]

  for (let i = 1; i < list.length; i++) {
    obj = [...obj, list[i].color]
  }

  setState(obj)
}
