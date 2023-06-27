import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

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
