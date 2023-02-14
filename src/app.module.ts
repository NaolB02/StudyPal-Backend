import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PendingTopicModule } from './pending-topic/pending-topic.module';
import { CompleteTopicModule } from './complete-topic/complete-topic.module';
import { AskedTopicModule } from './asked-topic/asked-topic.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://root:root@cluster0.0tudfdc.mongodb.net/study_pal?retryWrites=true&w=majority"), 
    AuthModule,
    AskedTopicModule,
    PendingTopicModule,
    CompleteTopicModule],

})
export class AppModule {}
