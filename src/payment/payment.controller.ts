import { Body, Controller, Post } from '@nestjs/common';
import { Get, Param, UseGuards } from '@nestjs/common/decorators';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/auth/schema/user.schema';
import { PaymentService } from './payment.service';

@UseGuards(JwtGuard)
@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService){}


    @Post('deposit')
    async deposit(@GetUser() user: User, @Body() body){
        // console.log(user, "from the deposit controller")
       const check =  await this.paymentService.deposit(body.amount, user)
       console.log(check)
       return check
    }
    @Get('verify-transaction/:id')
    async verifyTransaction(@Param('id') id){
        return await this.paymentService.verifyTransaction(id);
    }

}
