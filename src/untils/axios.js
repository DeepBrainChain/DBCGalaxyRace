import axios from 'axios'

axios.defaults.timeout = 20000;
// axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use(response => {
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
  // 否则的话抛出错误
  if (response.status === 200) {            
    return Promise.resolve(response.data);        
  } else {            
    return Promise.reject(response);        
  }    
})

export default axios