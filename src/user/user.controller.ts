import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/add')
  async addUser(@Body() user: CreateUserDto) {
    const userData = await this.userService.createUser(user);

    return userData;
  }

  @Get()
  findUsers() {
    return this.userService.findAllUser();
  }

  @Get('/address')
  findUserByAddress(@Query('addressId') addressId: string) {
    return this.userService.findUserByAddress(addressId);
  }

  @Get('/:_id')
  findUserById(@Param('_id') _id: string) {
    return this.userService.findOneUser(_id);
  }

  @Patch('/update/:_id')
  getUserByIdAndUpdate(@Param('_id') _id: string, @Body() body: UpdateUserDto) {
    return this.userService.findOneUserAndUpdate(_id, body);
  }

  @Delete('/delete/:_id')
  getUserByIdAndDelete(@Param('_id') _id: string) {
    return this.userService.findOneUserByIdAndDelete(_id);
  }
}
