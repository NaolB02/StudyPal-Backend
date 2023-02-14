import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createuser.dto';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    async insertUser(@Body() createUserDto: CreateUserDto){
        const generateId = await this.authService.insertUser(createUserDto)

        return generateId 
    }
}
