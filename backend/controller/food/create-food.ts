import { Request, Response } from "express";
import { createFoodQuery } from "../../query";

export const CreateFoodController = async (req: Request, res: Response) => {
  try {
    const result = await createFoodQuery(req);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
