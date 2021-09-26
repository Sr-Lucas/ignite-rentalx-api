import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../repositories/interfaces/ISpecificationRepository";

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specification = this.specificationRepository.findByName(name);

    if (specification) {
      throw new Error("Specification already exists");
    }

    this.specificationRepository.create({ name, description });
  }
}
