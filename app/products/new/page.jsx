"use client";
import NavLayout from "@/components/NavLayout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Titan_One } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";

const NewProduct = () => {
  const [Post, setPost] = useState({
    _id: "",
    title: "",
    description: "",
    price: "",
    owner: "",
    productImages: "",
  });
  const { data: session } = useSession();
  const router = useRouter();
  const createProduct = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        title: Post.title,
        description: Post.Description,
        price: Post.Price,
        owner: session?.user.id,
      }),
    });
    if (response.ok) {
      console.log("d");
      router.push("/products");
    }
  };

  return (
    <NavLayout>
      <ProductForm
        Name="New"
        Post={Post}
        onSubmit={createProduct}
        setPost={setPost}
      />
    </NavLayout>
  );
};

export default NewProduct;
