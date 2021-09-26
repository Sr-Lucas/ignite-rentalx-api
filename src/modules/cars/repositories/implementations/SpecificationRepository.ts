import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, createdAt: new Date() });

    this.specifications.push(specification);
  }
}
