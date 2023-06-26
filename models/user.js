import "server-only";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    require: [true, "user is required"],
  },
  email: {
    type: String,
    require: [true, "email required"],
    unique: [true, "should be unique"],
  },
  image: {
    type: String,
    require: [true],
  },
});

const User = models.User || model("User", UserSchema);
export default User;
