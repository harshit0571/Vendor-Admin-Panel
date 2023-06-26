"use client";
import NavLayout from "@/components/NavLayout";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const { data: session } = useSession();
  const [Products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/products`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    const sOUt = () => {
      router.push("/");
    };
    if (session?.user.id) {
      getProducts();
    } else {
      sOUt();
    }
  }, []);
  return (
    <NavLayout>
      <Link
        href="/products/new"
        className="bg-green-500 text-white p-3 mt-3 rounded-lg"
      >
        add new product
      </Link>
      <table className="mt-10 basic">
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Products.map((Product) => (
            <tr>
              <td>{Product.title}</td>
              <td>
                <Link
                  href={`products/${Product._id}`}
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg"
                >
                  edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </NavLayout>
  );
};

export default Product;
