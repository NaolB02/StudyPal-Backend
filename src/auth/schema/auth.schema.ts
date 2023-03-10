import mongoose, * as mongoonse from "mongoose";

export const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: false},
    telegram: {type: String, required: false},
    rate: {type: Number, required: false},
    resume: {type: String, required: false},
    skills: {type: Array, required: false},
    tutorfee: {type: Number, required: false},
    bio: {type: String, required: false},
    photo: {type: String, required: false},
    walletBalance: {type: Number, required: false},
    
})


export interface User {
    id: number;
    fullname: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    telegram: string;
    rating: number;
    resume: string;
    skills: [];
    tutorfee: number;
    bio: string;
    photo: string;
    walletBalance: number;
}