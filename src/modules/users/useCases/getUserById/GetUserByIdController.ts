import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

class GetUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: loggedUserId } = request.user;
    const { id: requestedUserId } = request.params;

    const getUserByIDUseCase = container.resolve(GetUserByIdUseCase);
    const user = await getUserByIDUseCase.execute({
      loggedUserId,
      requestedUserId,
    });

    return response.status(200).json(user);
  }
}

export { GetUserByIdController };
