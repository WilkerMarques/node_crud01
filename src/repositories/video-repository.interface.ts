import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

export interface IVideoRepository {
    create(video: Video): Promise<Video>;
}

export interface ICategoryRepository {
    findById(id: string): Promise<Category| undefined>;
}