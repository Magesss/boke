import Cookies from 'js-cookie'
const TokenKey = 'access-token'

export function getToken (name = TokenKey) {
  return Cookies.get(name)
}

export function setToken (token:string, name = TokenKey) {
  return Cookies.set(name, token)
}

export function removeToken (name = TokenKey) {
  return Cookies.remove(name)
}
