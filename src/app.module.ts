import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    MongooseModule.forRoot("mongodb+srv://akwinderDhiman128:8ddHNdn6OFjbMfYi@cluster0.5rsqzj4.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}