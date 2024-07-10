// @ts-nocheck
import {create} from 'zustand';
import {User} from "../types/user.ts";
import {Appointment} from "../types/appointment.ts";
import {TimeSlot} from "../types/time-slot.ts";

export interface ITherapyStore {
    provider?: any,
    setProvider: Function,
    isBooking: Boolean,
    setIsBooking: Function,
    user?: User,
    setUser: Function,
    appointments?: Appointment[],
    addAppointment: Function,
    getOpenTimeslots: Function,
    timeSlots: TimeSlot[],
}

const useTherapyStore = create((set) => ({
    provider: null,
    setProvider: (prof: any) => {
        set((state) => ({provider: prof}))
    },
    isBooking: false,
    setIsBooking: (value: Boolean) => {
        set((state) => ({isBooking: value}))
    },
    user: {},
    setUser: (usr) => {
        set((state) => ({user: usr}))
    },
    appointments: [],
    addAppointment: (apt: { date: string; provider: any; patient: {}; time: any; type: any }) => {
        console.log('addApt', apt)
        set((state) => ({appointments: [...state.appointments, apt]}))
    },
    timeSlots: {},
    getOpenTimeslots: (dt: Date) => {
        const d = dt.toString();
        const result = []
        dt.setHours(9, 0, 0, 0)
        for (let i = 0; i < 32; i++) {
            const minutes = dt.getMinutes();
            const rnd = ~~(Math.random() * 10)
            let slot = {
                date: dt,
                time: dt.toString().split(' ')[4].split(':').filter((_, i) => (i < 2)).join(':'),
                available: rnd < 4
            }
            dt.setMinutes(minutes + 15);
            result.push(slot)
        }
        console.log(result)
        set((state) => ({timeSlots: result}))
    }
}))

export default useTherapyStore;
