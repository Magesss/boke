import request from '../../utils/http'
import {basePath} from '../basePath'

export async function userLogin(params:any){
  return request.post(`${basePath}/login`, params)
}
