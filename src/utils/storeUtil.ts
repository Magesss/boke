export function validatenull (val:any) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    return val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
  }
  return false
}

/**
 * 存储Storage
 */
export const setStore = (params:any) => {
  let { name, content} = params
  let obj = {
    dataType: typeof content,
    content: content,
    datetime: new Date().getTime()
  }
  window.sessionStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取Storage
 */

export const getStore = (params:any) => {
  let { name } = params
  let obj:any = {}
  let content
  obj = window.sessionStorage.getItem(name)
  if (validatenull(obj)) return
  obj = JSON.parse(obj)
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = obj.content
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}
/**
 * 删除localStorage
 */
export const removeStore = (params:any) => {
  let { name } = params
  window.sessionStorage.removeItem(name)
}



/**
 * 清空全部localStorage
 */
export const clearStore = (params:any) => {
  let { type } = params
  if (type) {
    window.sessionStorage.clear()
    return
  }
  window.localStorage.clear()
}
