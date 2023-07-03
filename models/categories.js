import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    require: true,
  },
  properties: [{ type: Object }],
});

const Category = models.CategoryS || model("CategoryS", CategorySchema);
export default Category;
