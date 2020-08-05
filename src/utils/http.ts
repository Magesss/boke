
/*
* 请求方法
*/
import {message} from 'antd'


interface resObject {
  status: number,
  statusText: string,
  clone: any
}
const checkStatus = (res:resObject) => {
  if(res.status >= 200 && res.status < 300) {
    return res
  }
  message.error(`网络请求失败,${res.status}`)
  throw new Error(res.statusText)
}


/*
*  捕获成功登录过期状态码等
*  @params res
*  @return {*}
*/
const judgeOkState = async (res:any) => {
  const cloneRes = await res.clone().json()
  //  TODO: 可以在这管控全局请求
  if(cloneRes.code !== 1) {
    message.error(`${cloneRes.msg}， code:${cloneRes.code}`)
    throw new Error(cloneRes.msg)
  } else {
    return res
  }
}

/**
 * 捕获失败
 * @param error
 */
const handleError = (error:object) => {
  if (error instanceof TypeError) {
    message.error(`网络请求失败啦！${error}`);
  }
  return {   //防止页面崩溃，因为每个接口都有判断res.code以及data
    code: -1,
    data: false,
  };
};

// 请求类
class http {
  /**
   *静态的fetch请求通用方法
   * @param url
   * @param options
   * @returns {Promise<unknown>}
   */
  static async staticFetch(url = '', options:any = {}) {

    const defaultOptions:any = {
      /*允许携带cookies*/
      credentials: 'include',
      /*允许跨域**/
      mode: 'cors',
      headers: {
        token: null,
        Authorization: sessionStorage.getItem('access_token'),
        // 当请求方法是POST，如果不指定content-type是其他类型的话，默认为如下↓，要求参数传递样式为 key1=value1&key2=value2，但实际场景以json为多
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    if (options === 'POST' || 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json; charset=utf-8';
    }
    const newOptions = { ...defaultOptions, ...options };
    return fetch(url, newOptions)
      .then(checkStatus)
      .then(judgeOkState)
      .then((res:any) => res.json())
      .catch(handleError);
  }

  /**
   *post请求方式
   * @param url
   * @param params
   * @param option
   * @returns {Promise<unknown>}
   */
  post(url:string, params = {}, option:any = {}) {
    const options = Object.assign({ method: 'POST' }, option);
    //一般我们常用场景用的是json，所以需要在headers加Content-Type类型
    options.body = JSON.stringify(params);

    //可以是上传键值对形式，也可以是文件，使用append创造键值对数据
    if (options.type === 'FormData' && options.body !== 'undefined') {
      let params = new FormData();
      for (let key of Object.keys(options.body)) {
        params.append(key, options.body[key]);
      }
      options.body = params;
    }
    return http.staticFetch(url, options); //类的静态方法只能通过类本身调用
  }

  /**
   * put方法
   * @param url
   * @param params
   * @param option
   * @returns {Promise<unknown>}
   */
  put(url:string, params = {}, option:any = {}) {
    const options = Object.assign({ method: 'PUT' }, option);
    options.body = JSON.stringify(params);
    return http.staticFetch(url, options); //类的静态方法只能通过类本身调用
  }

  /**
   * get请求方式
   * @param url
   * @param option
   */
  get(url:string, option = {}) {
    const options = Object.assign({ method: 'GET' }, option);
    return http.staticFetch(url, options);
  }
}

const requestFun = new http(); //new生成实例
export const { post, get, put } = requestFun;
export default requestFun;
