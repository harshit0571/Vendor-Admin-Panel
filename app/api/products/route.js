import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
  }
};
