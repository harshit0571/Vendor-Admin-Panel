import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const Products = await Product.find({
      owner: params.id,
    });
    return new Response(JSON.stringify(Products), { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: params.id, success: true });
  }
};
