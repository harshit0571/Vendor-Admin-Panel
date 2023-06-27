"use client";
import NavLayout from "@/components/NavLayout";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Product_Edit = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/products/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
    };
    getProduct();
  }, [id]);
  return <NavLayout>edit products here:</NavLayout>;
};

export default Product_Edit;
