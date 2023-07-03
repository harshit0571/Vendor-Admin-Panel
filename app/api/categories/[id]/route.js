import Category from "@/models/categories";
import { connectToDB } from "@/utils/database";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Category.findByIdAndDelete(params._id);
    return new Response(JSON.stringify(params._id), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response({ status: 500 });
  }
};
