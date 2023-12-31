import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDB();
    const { title, description, price, productImages, owner } =
      await req.json();

    const NewProduct = await Product.create({
      title,
      description,
      price,
      productImages,
      owner,
    });
    await NewProduct.save();
    return NextResponse.json({ message: productImages, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, success: false });
  }
};
