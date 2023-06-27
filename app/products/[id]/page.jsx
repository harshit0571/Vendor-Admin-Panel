"use client";
import NavLayout from "@/components/NavLayout";
import ProductForm from "@/components/ProductForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product_Edit = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [Post, setPost] = useState({
    _id: "",
    title: "",
    description: "",
    price: "",
    owner: "",
  });
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/products/${id}`, {
        method: "GET",
      });
      await response.json().then((data) => {
        console.log(data);
        setPost(data);
      });
    };
    getProduct();
  }, []);

  const editProduct = () => {
    alert("d");
  };

  return (
    <NavLayout>
      <ProductForm
        Name="Edit"
        Post={Post}
        onSubmit={editProduct}
        setPost={setPost}
      />
    </NavLayout>
  );
};

export default Product_Edit;
