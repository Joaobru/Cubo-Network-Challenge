export function filteredParticipation (list:any, setState:any) {
  let obj = [list[0].participation]

  for (let i = 1; i < list.length; i++) {
    obj = [...obj, list[i].participation]
  }

  setState(obj)
}
