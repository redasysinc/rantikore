import axios from 'axios'
import npis from './npis'

axios.defaults.baseURL = 'http://localhost:8080/api';

export default {
    getUsername: async ()=>{
      const res = await axios.get('/getusername')
        return res.data.username
    },
    healthCheck: async ()=>{
      const res = await axios.get('/')
      return res.data;
    }
}
