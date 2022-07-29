import { Video } from "../entities/Video";
import { AppDataSource } from "../server";


export class GetAllVideosService{
    async execute() {
        const repo = AppDataSource.getRepository(Video)

        const video = await repo.find({
            relations: ["category"],
        });

        return video;
    }
}