import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AskedTopicService } from './asked-topic.service';
import { CreateAskedTopicDto } from './dto/createAskedTopic.dto';

@Controller('asked-topic')
export class AskedTopicController {
    constructor(private askedTopicService: AskedTopicService){}

    @Post('create-topic')
    async createTopic(@Body() askedtop: CreateAskedTopicDto): Promise<string> {
        return await this.askedTopicService.createTopic(askedtop); 
    }
    
    @Get('all-topics')
    async get_topics(){

        return this.askedTopicService.get_topics();
    }

    @Patch('apply')
    async apply(@Body() { applicantId, topicId}){

        return await this.askedTopicService.apply(applicantId, topicId);

    }

    @Post('get-applicants')
    async get_applicants(@Body() {topicId}){
        return this.askedTopicService.get_applicants(topicId)
    }


    
}
