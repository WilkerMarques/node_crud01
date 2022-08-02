import { Request, Response } from "express";
import { CategoryRepository, VideoRepository } from "../repositories/videoRepositoryImplementation";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {

    async handle(request: Request, response: Response) {
        const { name, description, duration, category_id } = request.body

        const service = new CreateVideoService(new VideoRepository(), new CategoryRepository());

        const result = await service.execute({ name, description, duration, category_id });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}