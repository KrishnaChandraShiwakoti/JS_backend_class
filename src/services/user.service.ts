import { UserMongoRepository } from "../repositories/user.repository";
import { CreateUserDto, LoginUserDto } from "../dtos/user.dto";
import { HttpException } from "../exceptions/http-exception";
import bycrypt from "bcryptjs"; // to hash password

//jwt for token generation
import jwt from "jsonwebtoken";
import { SECRECT_KEY } from "../config/constant";
import { StringFormatParams } from "zod/v4/core";

const userRepository = new UserMongoRepository();

export class UserService {
  async createUser(userData: CreateUserDto) {
    // Check if username or email already exists
    const existingUserByUsername = await userRepository.findByUsername(
      userData.username,
    );
    if (existingUserByUsername) {
      throw new HttpException(400, "Username already exists");
    }
    const existingUserByEmail = await userRepository.findByEmail(
      userData.email as string,
    );
    if (existingUserByEmail) {
      throw new HttpException(400, "Email already exists");
    }
    //Hash password before saving

    // Hash the password before saving
    const hashedPassword = await bycrypt.hash(userData.password, 10);
    const userToCreate = {
      ...userData,
      password: hashedPassword,
    };
    const createdUser = await userRepository.create(userToCreate as any);
    return createdUser;
  }

  async loginUser(loginData: LoginUserDto) {
    const user = await userRepository.findByEmail(loginData.email as string);
    if (!user) {
      throw new HttpException(400, "Invalid email or password");
    }

    const isPasswordValid = await bycrypt.compare(
      loginData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new HttpException(400, "Invalid email or password");
    }
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRECT_KEY,
      { expiresIn: "30d" },
    );
    return { user, token };
  }
}
