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
        console.log(res)
      return res.data;
    },
    getMedicalProfessionals : async () => {
        const result = await axios.get(`/doclist`)
        console.log(result.data)
        return result.data;
    },
    getProfessional: async (npi) =>{
        const result = await axios.get(`/doclist?npi=${npi}`)
        console.log('client api:', result)
        localStorage.setItem(npi, JSON.stringify(result))
        return result;
    }
}
