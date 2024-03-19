import { Model, model, Schema, models } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: String;
  image: String;
  ingredients: String;
  price: String;
};

const FoodSchema = new Schema<FoodModelType>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: String, required: true },
});

export const FoodModel: Model<FoodModelType> =
  models["Foods"] || model("Foods", FoodSchema);
