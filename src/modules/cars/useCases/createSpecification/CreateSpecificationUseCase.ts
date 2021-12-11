import { inject, injectable } from "tsyringe";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/interfaces/ISpecificationRepository";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = await this.specificationRepository.findByName(name);

    if (specification) {
      throw new Error("Specification already exists");
    }

    await this.specificationRepository.create({ name, description });
  }
}
