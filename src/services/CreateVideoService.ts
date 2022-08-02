
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { ICategoryRepository, IVideoRepository } from "../repositories/video-repository.interface";
import { AppDataSource } from "../server";

type VideoResquest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
};

export class CreateVideoService {

    constructor(
        private readonly videoRepo: IVideoRepository,
        private readonly categoryRepo: ICategoryRepository) {
    }

    async execute({ name, description, duration, category_id }: VideoResquest): Promise<Error | Video> {

        const categoryExists = await this.categoryRepo.findById(category_id);
        if (!categoryExists) {
            return new Error("Video already exists");
        }

        const videoCreated = await this.videoRepo.create({ name, description, duration, category_id } as Video)

        return videoCreated;
    }
}