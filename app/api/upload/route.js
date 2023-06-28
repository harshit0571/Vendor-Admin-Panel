import { connectToDB } from "@/utils/database";
import { v2 as cloudinary } from "cloudinary";

export const POST = async () => {
  try {
    await connectToDB();
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    const photourl = await cloudinary.uploader.upload(photo);
    console.log(photourl);
  } catch (error) {}
};
