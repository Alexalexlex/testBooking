import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await this.userRepository.save({
      ...user,
      password: hashedPassword,
    });
    return newUser;
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<User> {
    const userToRemove = await this.userRepository.findOne(id);
    return await this.userRepository.remove(userToRemove);
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save({
      ...updateUserDto,
      id: Number(id),
    });
  }
}
