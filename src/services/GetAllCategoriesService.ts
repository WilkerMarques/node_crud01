import { Category } from "../entities/Category";
import { AppDataSource } from "../server";


export class GetAllCategoriesService{
    async execute() {
        const repo = AppDataSource.getRepository(Category)

        const categories = await repo.find();

        return categories;
    }
}