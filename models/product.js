import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, require: [true, "required"] },
  description: { type: String, require: [true, "required"] },
  price: {
    type: Number,
    require: [true, "required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
