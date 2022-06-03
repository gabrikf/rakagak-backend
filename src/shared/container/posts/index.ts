import { CommentaryRepository } from "@modules/posts/infra/typeorm/repositories/CommentRepository";
import { PostRepository } from "@modules/posts/infra/typeorm/repositories/PostRepository";
import { ICommentaryRepository } from "@modules/posts/repositories/ICommentRepository";
import { IPostRepository } from "@modules/posts/repositories/IPostRepository";
import { container } from "tsyringe";

container.registerSingleton<IPostRepository>("PostRepository", PostRepository);

container.registerSingleton<ICommentaryRepository>(
  "CommentaryRepository",
  CommentaryRepository
);
