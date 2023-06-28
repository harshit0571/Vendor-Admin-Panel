"use client";
import NavLayout from "@/components/NavLayout";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const Delete_Product = () => {
  const router = useRouter();
  const title = useSearchParams().get("name");

  const id = useParams().id;
  console.log(title);
  console.log(id);
  const deleteProduct = async () => {
    const respone = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await respone.json();
    if (respone.ok) {
      router.push("/products");
    }
  };
  return (
    <NavLayout>
      <div className="flex justify-center flex-col items-center gap-6">
        <h1 className="text-lg md:text-3xl ">
          Do you really want to delete "{title}"?
        </h1>
        <div className="flex gap-5">
          <button
            className="px-4 py-2 bg-blue-200 text-blue-700 rounded-lg"
            onClick={() => {
              router.push("/products");
            }}
          >
            no
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={deleteProduct}
          >
            yes
          </button>
        </div>
      </div>
    </NavLayout>
  );
};

export default Delete_Product;
