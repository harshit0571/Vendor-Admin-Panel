"use client";
import NavLayout from "@/components/NavLayout";
import axios from "axios";
import { useState } from "react";

const NewProduct = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    const data = { Title, Description, Price };
    await axios.post("/api/products", data, {
      "Content-Type": "application/json",
    });
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
