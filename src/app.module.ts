import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AskedTopicModule } from './asked-topic/asked-topic.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://root:root@cluster0.0tudfdc.mongodb.net/study_pal?retryWrites=true&w=majority"), 
    AuthModule,
    AskedTopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
