import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }

    async getAllUsers() {
        let users = await this.userModel.find({})
        console.log(users, "check users")
        return users
    }

    async getUser(id: string) {
        console.log(id, "check id")
        let mongooseId = new mongoose.Types.ObjectId(id)
        let user = await this.userModel.findById(mongooseId)
        if (!user) {
            throw new BadRequestException("No user found with this id")
        }
        return user
    }
    async createUser(createUserDto: CreateUserDto) {
        console.log(createUserDto, "createUserDto")
        let createdUser = await this.userModel.create(createUserDto)
        console.log(createdUser, "createdUser")
        return {
            message: "User created successfully!"
        }
    }
    async checkIfUserExists(id: string) {
        let mongooseId = new mongoose.Types.ObjectId(id)
        let userExists = await this.userModel.findById(mongooseId)
        if (!userExists) {
            throw new BadRequestException("No user exists with this id")
        }
        return mongooseId
    }
    async updateUser(updatedUserDto: UpdateUserDto) {
        console.log(updatedUserDto._id, "updatedUserDto._id")
        const { _id, ...rest } = updatedUserDto
        let mongooseId = await this.checkIfUserExists(_id)
        await this.userModel.findByIdAndUpdate(mongooseId, rest)
        return {
            message: "User updated successfully!"
        }
    }

    async deleteUser(deleteUserDto: DeleteUserDto) {
        let mongooseId = await this.checkIfUserExists(deleteUserDto._id)
        await this.userModel.findByIdAndDelete(mongooseId)
        return {
            message: "User deleted successfully!"
        }
    }
}
