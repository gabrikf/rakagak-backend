import { UserRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { container } from "tsyringe";
import { IPostRepository } from "@modules/posts/repositories/IPostRepository";
import { PostReposotory } from "@modules/posts/infra/typeorm/repositories/PostRepository";
import { FollowersRepository } from "@modules/users/infra/typeorm/repositories/FollowersRepository";
import { IFollowersRepository } from "@modules/users/repositories/IFollowersRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IPostRepository>("PostRepository", PostReposotory);

container.registerSingleton<IFollowersRepository>("FollowersRepository", FollowersRepository);
