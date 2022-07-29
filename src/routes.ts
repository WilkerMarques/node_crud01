import { Router } from "express";
import { CreateCategoryController } from "./Controllers/CreateCategoryController";
import { DeleteCategoryController } from "./Controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./Controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./Controllers/UpdateCategoryController ";
import { CreateVideoController } from "./Controllers/CreateVideoController";
import { GetAllVideosController } from "./Controllers/GetAllVideosController";


const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);


routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };