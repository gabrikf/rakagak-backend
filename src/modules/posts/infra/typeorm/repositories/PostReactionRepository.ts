import { IPostReactionRepository } from "@modules/posts/repositories/IPostReactionRepository";
import { getRepository, Repository } from "typeorm";
import { PostReaction } from "../entities/PostReactions";

class PostReactionRepository implements IPostReactionRepository {
  private repository: Repository<PostReaction>;
  constructor() {
    this.repository = getRepository(PostReaction);
  }

  async create({ postId, userId, reactionType }: IReactionsDTO): Promise<void> {
    const postReaction = this.repository.create({
      postId,
      userId,
      reactionType,
    });
    await this.repository.save(postReaction);
  }
  async getAll(): Promise<PostReaction[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getReaction({
    postId,
    reactionType,
    userId,
  }: IReactionsDTO): Promise<PostReaction> {
    const reaction = await this.repository.findOne({
      postId,
      reactionType,
      userId,
    });
    return reaction;
  }
}

export { PostReactionRepository };
