import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReturnPostsUseCase } from "./ReturnPostsUseCase";

class ReturnPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, limit } = request.query;
    const returnPostUseCase = container.resolve(ReturnPostsUseCase);
    const posts = await returnPostUseCase.execute({
      page: +page,
      limit: +limit,
    });
    return response.status(200).json(posts);
  }
}
export { ReturnPostController };
