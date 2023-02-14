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

}
