import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop([String])
  favoriteFoods: string[];
}

export type UserDocument = User & Document;
export const userSchema = SchemaFactory.createForClass(User);
