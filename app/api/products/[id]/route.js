import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const EditProduct = await Product.findById(params.id);

    return new Response(JSON.stringify(EditProduct), { success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, success: false });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();
    const { title, description, price } = await req.json();
    const toUpdateProduct = await Product.findById(params.id);
    toUpdateProduct.title = title;
    toUpdateProduct.description = description;
    toUpdateProduct.price = price;
    toUpdateProduct.save();
    return new Response(JSON.stringify(toUpdateProduct), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse({ message: "error", status: 501 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    const p = await Product.findByIdAndRemove(params.id);
    return new Response(JSON.stringify(p), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting prompt", { status: 500 });
  }
};
