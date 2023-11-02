import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserDto{
    @Field({
        nullable:false
    })
    firstName:string

    @Field({
        nullable:false
    })
    lastName:string

    @Field({
        nullable:false,
    })
    password:string
}