"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { ReactSortable } from "react-sortablejs";

export const ProductForm = ({ Name, Post, onSubmit, setPost }) => {
  const [isUploading, setisUploading] = useState(false);
  const uploadImage = async (ev) => {
    setisUploading(true);
    const data = new FormData();
    const files = ev.target?.files;
    if (files?.length > 0) {
      for (const file of files) {
        data.append("file", file);
        data.append("upload_preset", "i9jfldyo");
      }
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dczuwzqm8/image/upload",
          data
        );
        const UrlArray = Post.productImages;
        const url = await response.data.url;
        UrlArray.push(url);
        setPost({ ...Post, productImages: UrlArray });
        console.log(Post);
        setisUploading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const setImageOrder = () => {
    console.log("images");
  };

  return (
    <>
      <h1>{Name} Product</h1>
      <form onSubmit={onSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="product name"
          value={Post.title}
          onChange={(e) => {
            setPost({ ...Post, title: e.target.value });
          }}
        />
        <label>Photos:</label>
        <div className="mb-2 mt-2 flex flex-wrap gap-2">
          <ReactSortable list={Post.productImages} setList={setImageOrder}>
            {Post.productImages.length > 0 &&
              Post.productImages.map((link) => (
                <div key={link} className="inline-block cursor-pointer">
                  <Image
                    src={link}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
              ))}
          </ReactSortable>
          {isUploading && (
            <div className="w-24 h-24 border bg-gray-200 rounded-lg justify-center items-center cursor-pointer flex">
              <BounceLoader color="#0047ff" />
            </div>
          )}
          <label className="w-24 h-24 border bg-gray-200 rounded-lg justify-center items-center cursor-pointer flex">
            upload
            <input type="file" className="hidden" onChange={uploadImage} />
          </label>
          {!Post.productImages && <div>No photos in this product</div>}
        </div>
        <label>Product Description:</label>
        <textarea
          placeholder="description"
          value={Post.description}
          onChange={(e) => {
            setPost({ ...Post, description: e.target.value });
          }}
        ></textarea>
        <label>Product Price:</label>
        <input
          placeholder="price"
          value={Post.price}
          onChange={(e) => {
            setPost({ ...Post, price: e.target.value });
          }}
        />

        <button type="submit" className="btn_primary">
          Save
        </button>
      </form>
    </>
  );
};

export default ProductForm;
