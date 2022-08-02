import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { AppDataSource } from "../server";
import { ICategoryRepository, IVideoRepository } from "./video-repository.interface";

export class VideoRepository implements IVideoRepository {


    async create(video: Video) {
        const repo = AppDataSource.getRepository(Video);
        const videoCreated = await repo.save(video);
        return videoCreated;
    }
}



export class CategoryRepository implements ICategoryRepository {
    
    async findById(idCategory: string): Promise<Category | undefined> {
        const repoCategory = AppDataSource.getRepository(Category)
        const categoryExists = await repoCategory.findOneBy({ id: idCategory });
        return categoryExists;
    }
}