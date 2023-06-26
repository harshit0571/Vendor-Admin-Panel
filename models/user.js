import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

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
  },
});

const User = models.user || model("UserAdmin", UserSchema);
export default User;
