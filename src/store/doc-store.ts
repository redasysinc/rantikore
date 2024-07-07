/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import {create} from 'zustand';
import npis from '../api/npis'
import api from "../api/api.ts";
import {IProfessional, HealthcareProviderDaum} from '../types/iprofessional'

export interface Docstate {
    npiList: string[],
    selected?: IProfessional,
    setSelected: Function,
    providers: IProfessional[],
    getProviders: Function,
    location: string[],
    setLocation: Function,
}

const useDocStore = create((set) => ({
    npiList: npis,
    selected: {},
    location: [],
    providers: [],
    setLocation: (loc: string[]) => {
        set((state) => ({location: loc[0]}))
    },
    setSelected: async (npi?:string) => {
        if(!npi) {
            set((state) => ({selected: {}}))
        }else {
            const doctor = await api.getProfessional(npi)
            set((state) => ({selected: doctor}))
        }
    },
    getProviders: async () => {
        const result = await api.getMedicalProfessionals()
        set((state) => ({providers: result}))
    }
}))

export default useDocStore;
