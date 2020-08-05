export default function move (array:Array<any>, moveIndex:number, toIndex:number):Array<any> {
  let itemRemovedArray = [
    ...array.slice(0, moveIndex),
    ...array.slice(moveIndex + 1, array.length)
  ]
  return [
    ...itemRemovedArray.slice(0, toIndex),
    array[moveIndex],
    ...itemRemovedArray.slice(toIndex, itemRemovedArray.length)
  ]
}

// Examples
// --------
// move(['a', 'b','c'], 2, 0)
//
// // -> ['c', 'a', 'b']
