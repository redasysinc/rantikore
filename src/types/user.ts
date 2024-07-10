export type User = {
    id: Number,
    firstName: string,
    middle?: string,
    lastName: string,
    address?: string,
    phone:string,
    gender: string,
    dob: Date,
    appointments: Object[]
}
