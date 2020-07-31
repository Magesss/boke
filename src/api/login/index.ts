import request from '../../utils/http'
import {async} from "q";
interface parObject {
  url: string,
  option: any
}
export async function userLogin(params:parObject){
  return request.post('/login', params)
}
