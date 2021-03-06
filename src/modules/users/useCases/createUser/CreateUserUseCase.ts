import { AppError } from "../../../../shared/errors/AppError";
import { IUserDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../infra/typeorm/entities/Users";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute({
    full_name,
    nickname,
    email,
    password,
    isPrivate,
  }: IUserDTO): Promise<{ user: User; token: string }> {
    const userByEmail = await this.userRepository.getByEmail(email);
    if (userByEmail) {
      throw new AppError("This email is already being used.");
    }
    const userByNickName = await this.userRepository.getByNickName(nickname);
    if (userByNickName) {
      throw new AppError("This nickname is already being used.");
    }

    const hashedPassword = await hash(password, 8);
    const user = await this.userRepository.create({
      full_name,
      nickname,
      email,
      password: hashedPassword,
      isPrivate,
    });
    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    return { user, token };
  }
}

export { CreateUserUseCase };
