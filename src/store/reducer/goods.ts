interface dataType{
  list: Array<string>,
  status: boolean
}

let data:dataType = {
  list:[],
  status:false,
}

export default function (state = data, action:any) {
  switch (action.type) {
    case 'fixList':
      !state.list.includes(action.data) ? state.list.push(action.data) : console.log('已存在该商品')
      return {...state}
    default: return state
  }
}
