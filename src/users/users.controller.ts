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

import { CreateUserDto } from './dto/create-user.dto';
import { getUserByIdDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: number }, @Query() query: getUserByIdDto) {
    return this.userService.findOne(params.id, query.origin);
  }

  @Delete(':id')
  remove(@Param() params: any) {
    return this.userService.remove(params.id);
  }

  @Patch(':id')
  activeUser(@Param() params: any, @Body() user: UpdateUserDto) {
    return this.userService.activeUser(params.id, user);
  }
}
