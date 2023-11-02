import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User schema' })
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    type:String
  })
  @Field(type=>String)
  firstName: string;

  @Prop({
    type:String
  })
  @Field(type=>String)
  lastName: string;

  @Prop({
    type:String
  })
  @Field(type=>String)
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User)




// @ObjectType({ description: 'recipe ' })
// export class GetAllRecipe{
//   @Field({ nullable: true })
//   title:string;

//   @Field({ nullable: true })
//   description:string;

//   @Field(()=>Date)
//   createdAt:Date;

//   @Field(()=>[String])
//   ingredients:string[];

// }
