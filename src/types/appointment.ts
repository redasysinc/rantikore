import {User} from "./user.ts";

export type Appointment = {
    id?: Number,
    type: AppointmentType,
    date: string,
    time: string,
    patient?: User,
    provider: any
}

export enum AppointmentType {
    therapy,
    support,
    mental,
    sti,
    primary
}
