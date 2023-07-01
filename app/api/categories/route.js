import Category from "@/models/categories";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  try {
    await connectToDB();
    const { input, parent } = await req.json();
    await Category.create({ name: input, parent: parent });

    return new Response(JSON.stringify(input), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response({ status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const category = await Category.find({}).populate("parent");
    return new Response(JSON.stringify(category), { status: 200 });
  } catch (error) {
    return new Response({ status: 500 });
  }
};