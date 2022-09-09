import { Timestamp } from "firebase/firestore";

export interface Student {
    index: 1,
    id: string;
    Lastname: string,
    Firstname: string,
    Middlename: string,
    school: string;
    createdAt: Timestamp,
    addition: string,
    addition1: string,
    addition2: string,

    kcpe: boolean,
    kcse: boolean,
    birthcert: boolean,
    appform: boolean,
}