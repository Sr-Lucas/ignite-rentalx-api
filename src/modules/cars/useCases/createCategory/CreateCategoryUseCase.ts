import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const category = this.categoriesRepository.findByName(name);

    if (category) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
