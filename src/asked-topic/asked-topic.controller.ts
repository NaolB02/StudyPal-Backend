import { Body, Controller, Post } from '@nestjs/common';
import { AskedTopicService } from './asked-topic.service';
import { CreateAskedTopicDto } from './dto/createAskedTopic.dto';

@Controller('asked-topic')
export class AskedTopicController {
    constructor(private askedTopicService: AskedTopicService){}

    @Post('create-topic')
    async createTopic(@Body() askedtop: CreateAskedTopicDto): Promise<string> {
        return await this.askedTopicService.createTopic(askedtop); 
    }
}
