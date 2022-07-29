import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm"
import { CreateCategories1659018365014 } from "./database/migrations/1659018365014-CreateCategories";
import { CreateVideos1659028878162 } from "./database/migrations/1659028878162-CreateVideos";
import { Category } from "./entities/Category";
import { Video } from "./entities/Video";
import { routes } from "./routes";

const app = express();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "code_drops_crud",
    synchronize: true,
    logging: true,
    entities: [Category, Video],
    migrations: [CreateCategories1659018365014, CreateVideos1659028878162]
    
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server is running"));