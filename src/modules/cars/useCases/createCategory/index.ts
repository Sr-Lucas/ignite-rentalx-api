import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const catergoriesRepo = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(catergoriesRepo);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
