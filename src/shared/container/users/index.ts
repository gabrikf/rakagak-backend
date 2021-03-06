import { UserRepository } from "../../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IUserRepository } from "../../../modules/users/repositories/IUserRepository";
import { container } from "tsyringe";
import { FollowersRepository } from "@modules/users/infra/typeorm/repositories/FollowersRepository";
import { IFollowersRepository } from "@modules/users/repositories/IFollowersRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IFollowersRepository>(
  "FollowersRepository",
  FollowersRepository
);
