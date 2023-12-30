import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAskedTopicDto } from './dto/createAskedTopic.dto';
import { AskedTopic } from './schema/asked-topic.schema';

@Injectable()
export class AskedTopicService {
    constructor(@InjectModel('AskedTopic') private readonly askedTopicModel: Model<AskedTopic>){}

    async createTopic(askedTop: CreateAskedTopicDto) : Promise<string> {
        const newTopic  = new this.askedTopicModel(askedTop);
        const result = await newTopic.save();
        return await result.id;
    }


    async get_topics(){
        const filter = {}
        return await this.askedTopicModel.find(filter);
    }

    async apply(applicantId, topicId){
        const filter = { id:topicId };
        const top = await this.askedTopicModel.findOne(filter);
        console.log(top, "top")
        const applicants = top.applicants;
        console.log(applicants)
        applicants.push(applicantId);
        console.log(applicants)

        const update = { applicants }
        await this.askedTopicModel.findOneAndUpdate(filter, update);
        return await this.askedTopicModel.find(filter);

    }

    async get_applicants(topicId){
        const filter = {id: topicId}
        const cur_topic = await this.askedTopicModel.findOne(filter)
        let foundApplicants = [String];
        cur_topic.applicants.forEach(applicantId => {
            
        });
    }

    async 

}
