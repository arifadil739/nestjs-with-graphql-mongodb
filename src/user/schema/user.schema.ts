import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { ArgsType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

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


// import { ArgsType, Field, Int } from "@nestjs/graphql";
// import { Max, Min } from "class-validator";

// @ArgsType()
// export class RecipesArgs {
//   @Field((type) => Int)
//   @Min(0)
//   skip = 0;

//   @Field((type) => Int)
//   @Min(1)
//   @Max(50)
//   take = 25;
// }
