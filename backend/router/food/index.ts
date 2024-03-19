import { Router } from "express";
import { CreateFoodController, GetFoodsController } from "../../controller";

export const FoodRouter = Router();

FoodRouter.get("/foods", GetFoodsController);
FoodRouter.post("/food-create", CreateFoodController);
