import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { User } from '../schema/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    
      @InjectModel('User') private readonly userModel: Model<User>,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret101',
    });
  }

  async validate(payload: {
    username: string;
  }) {
    
    const filter = {username:payload.username}
    const user =  this.userModel.findOne(filter)
    if(!user){
      throw new UnauthorizedException()
    }



    return user;
  }
}