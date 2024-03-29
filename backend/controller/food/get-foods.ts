import { Request, Response } from "express";
import { getFoodsQuery } from "../../query";

export const GetFoodsController = async (req: Request, res: Response) => {
  try {
    const allFoods = await getFoodsQuery();
    res.send(allFoods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
