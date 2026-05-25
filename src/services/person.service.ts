import { PersonArrayRepository } from "../repositories/person.repository";
import { CreatePersonDTO, UpdatePersonDTO } from "../dtos/person.dto";
import { HttpException } from "../exceptions/http-exception";

const personRepo = new PersonArrayRepository();

export class PersonService {
  getOnePerson(id?: string) {
    if (!id) {
      throw new HttpException(400, "Id is required");
    }
    const person = personRepo.getOne(id);
    if (!person) {
      throw new HttpException(404, "Person not found");
    }
    //map/transform data if needed
    person.name = person.name.toUpperCase();
    return person;
  }
  createPerson(createPersonDTO: CreatePersonDTO) {
    //bussiness logic
    if (createPersonDTO.age < 18) {
      throw new HttpException(400, "Age must be at least 18");
    }
    const newPerson = personRepo.create({
      id: Date.now(),
      ...createPersonDTO,
    });
    newPerson.age = Number(newPerson.age);
    return newPerson;
  }
  updatePerson(id: string, updatePersonDTO: UpdatePersonDTO) {
    if (!id) {
      throw new HttpException(400, "Id is required");
    }
    const updatePerson = personRepo.update(id, {
      ...updatePersonDTO,
    });
    return updatePerson;
  }
}
