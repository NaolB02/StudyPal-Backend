"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    telegram: { type: String, required: false },
    rate: { type: Number, required: false },
    resume: { type: String, required: false },
    skills: { type: Array, required: false },
    tutorfee: { type: Number, required: false },
    bio: { type: String, required: false },
    photo: { type: String, required: false },
    walletBalance: { type: Number, required: false }
});
