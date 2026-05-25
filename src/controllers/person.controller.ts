import { Request, Response } from "express";
import { data } from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";
import { z } from "zod";
import { CreatePersonDTO, UpdatePersonDTO } from "../dtos/person.dto";
import { PersonService } from "../services/person.service";

const personService = new PersonService();

export class PersonController {
  // 1. logic through exception handling
  // 2. consistence api response
  // 3. global error handling middleware
  async createPerson(req: Request, res: Response) {
    const parseResult = CreatePersonDTO.safeParse(req.body);
    if (!parseResult.success) {
      throw new HttpException(400, z.prettifyError(parseResult.error));
    }
    const newPerson = personService.createPerson(parseResult.data);
    return ApiResponseHelper.success(res, newPerson, 201, "Person created");
  }
  // 1. Get all
  async getAllPerson(req: Request, res: Response) {
    //later paginated results
    try {
      const someVar: any = {};
      // simulate exception (server error)
      if (!someVar.name) {
        throw new HttpException(400, "Name is requird");
      }
      someVar.name.getAll();
      return ApiResponseHelper.success(res, data, 200, "Success");
    } catch (error) {
      // return res.status(500).json({ message: "Failed to get" });
      return ApiResponseHelper.error(
        res,
        error?.message || "failed to get",
        error.status || 500,
      );
    }
  }
  async getPersonById(req: Request, res: Response) {
    const { id } = req.params; //:id
    const person = data.find((p) => p.id === parseInt(id as string));
    if (!person) return ApiResponseHelper.error(res, "Person not fond", 404);
    return ApiResponseHelper.success(res, person, 200, "Success");
  }
  async updatePerson(req: Request, res: Response) {
    const { id } = req.params; //:id
    const parseResult = UpdatePersonDTO.safeParse(req.body);
    if (!parseResult.success) {
      throw new HttpException(400, z.prettifyError(parseResult.error));
    }
    const updatedPerson = personService.updatePerson(
      String(id),
      parseResult.data,
    );
    return ApiResponseHelper.success(res, updatedPerson, 200, "success");
  }
  async deletePerson(req: Request, res: Response) {
    const { id } = req.params;
    const personIndex = data.findIndex((p) => p.id === parseInt(id as string));
    data.splice(personIndex, 1);
    return res.status(204).json({ message: "Person Deleted" });
  }
}
