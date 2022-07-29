import { Category } from "../entities/Category";
import { AppDataSource } from "../server";



type CategoryUpdateResquest = {
    id: string;
    name: string;
    description: string;
};


export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateResquest){
        const repo = AppDataSource.getRepository(Category)

        const category = await repo.findOneBy({id});

        if (!category) {
            return new Error("Category does noit exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}