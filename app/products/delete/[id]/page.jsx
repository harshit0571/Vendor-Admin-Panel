"use client";
import { useParams } from "next/navigation";

const Delete_Product = () => {
  const id = useParams().id;
  console.log(id);
  const deleteProduct = async () => {
    const respone = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <button onClick={deleteProduct}>delete</button>
    </div>
  );
};

export default Delete_Product;
