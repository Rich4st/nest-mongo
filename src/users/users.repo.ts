import { Injectable, Module } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepo {
  constructor(
    @InjectModel(User.name) private usersModule: Model<UserDocument>,
  ) {}

  async findOne(userFilterQuery: FilterQuery<User>): Promise<User | undefined> {
    return this.usersModule.findOne(userFilterQuery);
  }

  async find(userFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.usersModule.find(userFilterQuery);
  }

  async create(user: Partial<User>): Promise<User> {
    const createdUser = new this.usersModule(user);
    return createdUser.save();
  }

  async update(
    userFilterQuery: FilterQuery<User>,
    user: User,
  ): Promise<User | undefined> {
    return this.usersModule.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }
}
