import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteUserDto{
    @Field({
        nullable:false
    })
    _id:string
}