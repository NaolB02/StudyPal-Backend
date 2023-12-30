import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AskedTopicController } from './asked-topic.controller';
import { AskedTopicService } from './asked-topic.service';
import { AskedTopicSchema } from './schema/asked-topic.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: "AskedTopic", schema: AskedTopicSchema}])],
    controllers: [AskedTopicController],
  providers: [AskedTopicService]
})
export class AskedTopicModule {}
