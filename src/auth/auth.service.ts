import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createuser.dto';
import { User } from './schema/auth.schema';

@Injectable()
export class AuthService {
    // private auths : Auth[] = [];

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ){}

    async insertUser(createUserDto: CreateUserDto){
        const newUser = new this.userModel({
            fullname: createUserDto.fullname,
            username: createUserDto.username,
            email: createUserDto.email,
            password: createUserDto.password,

        });
        // this.auths.push(newUser)
        const result = await newUser.save()
        console.log(result)
        return result

    }
}
