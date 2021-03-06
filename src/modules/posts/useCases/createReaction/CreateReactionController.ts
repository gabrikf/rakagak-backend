import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReactionUseCase } from "./createReactionUseCase";

class CreateReactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const { id: postId } = request.params;
    const { reactionType } = request.body;

    console.log(userId);
    const createReactionUseCase = container.resolve(CreateReactionUseCase);

    await createReactionUseCase.execute({
      postId,
      reactionType,
      userId,
    });

    return response.status(201).send();
  }
}

export { CreateReactionController };
