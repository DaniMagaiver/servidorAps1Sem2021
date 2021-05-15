import { Users } from "../models";
import { Request, Response } from "express";
import { UsersService } from "../services";

export default class UserController {
  static async create(request: Request, response: Response) {
    try {
      const userService = new UsersService();
      const user: Users = request.body;

      const newUser = await userService.create(user);
      return response.status(201).json(newUser);
    } catch (error) {
      response.status(400).json(error.message);
    }
  }

  static async remove(request: Request, response: Response) {
    try {
      const userService = new UsersService();
      const { userId } = request.params;
      await userService.remove(userId);
      response.status(204);
      response.end();
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

  static async update(request: Request, response: Response) {
    try {
      const userService = new UsersService();
      const { userId } = request.params;
      const user: Users = request.body;
      await userService.update(userId, user);
      const updatedUser = await userService.findOne(userId);
      return response.status(200).json(updatedUser);
    } catch (error) {
      response.status(500).json(error.message);
    }
  }

  static async findOne(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const userService = new UsersService();
      const user = await userService.findOne(userId);
      if (!user) throw new Error("Usuário não encontrado");
      return response.status(200).json(user);
    } catch (error) {
      response.status(404).json(error.message);
    }
  }

  static async getAll(request: Request, response: Response) {
    try {
      const userService = new UsersService();
      const users = await userService.listAll();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }

}
