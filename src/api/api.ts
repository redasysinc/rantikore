import axios from 'axios'
import data from './doclist.ts'

axios.defaults.baseURL = 'http://localhost:8080/api';

export default {
    getUsername: async ()=>{
      //const res = await axios.get('/getusername')
        //return res.data.username
        return 'jsmith'
    },
    healthCheck: async ()=>{
      return "I'm alive";
      //   const res = await axios.get('/')
      //   console.log(res)
      // return res.data;
    },
    getMedicalProfessionals : async () => {
        return data;
        // const result = await axios.get(`/doclist`)
        // console.log(result.data)
        // return result.data;
    },
    getProfessional: async (npi:string) =>{
        return data.filter(x=>x.NPI === npi)[0]
        // const result = await axios.get(`/doclist?npi=${npi}`)
        // console.log('client api:', result)
        // localStorage.setItem(npi, JSON.stringify(result))
        // return result;
    }
}