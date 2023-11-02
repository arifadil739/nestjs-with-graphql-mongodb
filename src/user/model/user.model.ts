import { Field, ObjectType,ArgsType, Int} from "@nestjs/graphql";
import {Types} from "mongoose"
import { Max, Min } from "class-validator";


@ObjectType({
    description: "User fetch object"
})
export class GetAllUsers {
    @Field(()=>String)
    _id: string

    @Field(()=>String)
    firstName: string

    @Field(()=>String)
    lastName: string

    @Field(()=>String)
    password: string

    @Field(()=>Date)
    createdAt: Date

    @Field(()=>String)
    updatedAt: Date
}

@ObjectType({
    description: "Created user message object"
})
export class CreateUserMessage{
    @Field(()=>String)
    message:string
}

// queries
@ArgsType()
export class UserArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 25;

  @Field((type)=> String)
  searchQuery = ""
}