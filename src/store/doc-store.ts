import {create} from 'zustand';
import npis from '../api/npis'
import api from "../api/api.ts";
import {IProfessional, HealthcareProviderDaum} from '../types/iprofessional'

export interface Docstate {
    npiList: string[],
    selected: IProfessional,
    setSelected: Function,
    providers: IProfessional[],
    getProviders: Function,
}

const useDocStore = create((set)=>( {
    npiList: npis,
    selected: null,
    providers: [],
    setSelected: async (npi)=>{
        const doctor = await api.getProfessional(npi)
        set((state)=>({selected:doctor}))
    },
    getProviders: async ()=>{
        const result = await api.getMedicalProfessionals()
        console.log(result)
        set((state)=>({providers: result}))
    }
}))

export default useDocStore;
