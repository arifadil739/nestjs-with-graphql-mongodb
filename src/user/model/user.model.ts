import { Field, ObjectType} from "@nestjs/graphql";
import {Types} from "mongoose"


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