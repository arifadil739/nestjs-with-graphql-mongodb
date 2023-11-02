import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { CreateUserMessage } from './model/user.model'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { GetAllUsers } from './model/user.model'
@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService
    ) { }

    @Query(returns => [GetAllUsers])
    async getAllUsers() {
        return await this.userService.getAllUsers()
    }

    @Query(returns => GetAllUsers)
    async getUser(
        @Args('_id') _id: string
    ) {
        return await this.userService.getUser(_id)
    }

    @Mutation(returns => CreateUserMessage)
    async createUser(
        @Args('createUserDto') createUserDto: CreateUserDto
    ) {
        return await this.userService.createUser(createUserDto)
    }

    @Mutation(returns => CreateUserMessage)
    async updateUser(
        @Args('updatedUserDto') updatedUserDto: UpdateUserDto
    ) {
        return await this.userService.updateUser(updatedUserDto)
    }

    @Mutation(returns => CreateUserMessage)
    async deleteUser(
        @Args('deleteUserDto') deleteUserDto: DeleteUserDto
    ) {
        return await this.userService.deleteUser(deleteUserDto)
    }
}
