import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PendingTopicModule } from './pending-topic/pending-topic.module';
import { CompleteTopicModule } from './complete-topic/complete-topic.module';

@Module({
<<<<<<< Updated upstream
  imports: [MongooseModule.forRoot("mongodb+srv://root:root@cluster0.0tudfdc.mongodb.net/study_pal?retryWrites=true&w=majority"), AuthModule],
=======
  imports: [
    MongooseModule.forRoot("mongodb+srv://root:root@cluster0.0tudfdc.mongodb.net/study_pal?retryWrites=true&w=majority"), 
    AuthModule,
    AskedTopicModule,
    PendingTopicModule,
    CompleteTopicModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
