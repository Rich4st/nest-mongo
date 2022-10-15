import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { User } from './schemas/user.schema';
import { UsersRepo } from './users.repo';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepo) {}

  async getUserById(userId: string): Promise<User | undefined> {
    return this.usersRepo.findOne({ id: userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepo.find({});
  }

  async createUser(user: Partial<User>): Promise<User> {
    return this.usersRepo.create({ userId: v4(), ...user });
  }
}
