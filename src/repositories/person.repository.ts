import { Person } from "../types/person.type";
import { data } from "../models/person.model";

//database/source conatct
interface IPersonRepository {
  getAll(): Person[];
  getOne(id: string): Person | undefined;
  create(person: Person): Person | undefined;
  update(id: string, person: Partial<Person>): Person | undefined;
}

export class PersonArrayRepository implements IPersonRepository {
  getAll(): Person[] {
    return data;
  }
  getOne(id: string): Person | undefined {
    const found = data.find((p) => p.id === parseInt(id));
    return found;
  }
  create(person: Person): Person | undefined {
    data.push(person);
    return person;
  }
  update(id: string, person: Partial<Person>): Person | undefined {
    const foundIndex = data.findIndex((p) => p.id === parseInt(id));
    data[foundIndex] = { ...data[foundIndex], ...person };
    return data[foundIndex];
  }
}
