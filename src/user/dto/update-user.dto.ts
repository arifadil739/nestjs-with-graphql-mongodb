import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserDto{

    @Field(()=>String)
    _id:string

    @Field({
        nullable:true
    })
    firstName:string

    @Field({
        nullable:true
    })
    lastName:string

    @Field({
        nullable:true,
    })
    password:string
}