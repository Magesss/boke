import request from '../../utils/http'

export async function userLogin(params:any){
  return request.post('/api/login', params)
}
