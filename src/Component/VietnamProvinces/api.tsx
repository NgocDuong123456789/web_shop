import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://provinces.open-api.vn',
  });

export const get = async (path:string, option:{})=>{
      const respone =await instance.get(path, option)
     return respone
}

export default instance
