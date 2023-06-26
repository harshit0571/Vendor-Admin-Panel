"use client";
import NavLayout from "@/components/NavLayout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Titan_One } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewProduct = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const createProduct = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        title: Title,
        description: Description,
        price: Price,
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
      <h1>New Product</h1>
      <form onSubmit={createProduct}>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="product name"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Product Description:</label>
        <textarea
          placeholder="description"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <label>Product Price:</label>
        <input
          placeholder="price"
          value={Price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <button type="submit" className="btn_primary">
          Save
        </button>
      </form>
    </NavLayout>
  );
};

export default NewProduct;
