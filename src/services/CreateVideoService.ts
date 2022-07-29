
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { AppDataSource } from "../server";

type VideoResquest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
};

export class CreateVideoService {

   async execute({ name, description, duration, category_id}: VideoResquest ): Promise<Error | Video> {
    
    const repo = AppDataSource.getRepository(Video)
    const repoCategory = AppDataSource.getRepository(Category)

    if(await repo.findOneBy({ name })) {
        return new Error("Video already exists");
    }

    const video = repo.create({
        name,
        description,
        duration,
        category_id
    });

    await repo.save(video);

    return video;
   }
}