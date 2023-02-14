import * as mongoose from "mongoose";

export const AskedTopicSchema = new mongoose.Schema({
    title: { type: String, required: true},
    desc: { type: String, required: true},
    tag: { type: String, required: true},
    applicants: {type: [String], required: false},
    owner: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: false }
})

export interface AskedTopic extends mongoose.Document {
    id: string;
    title: string;
    desc: string;
    tag: string;
    applicants: [string];
    owner: mongoose.Schema.Types.ObjectId;
}
