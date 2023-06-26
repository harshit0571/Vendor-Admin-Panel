import NavLayout from "@/components/NavLayout";
import Link from "next/link";

const Product = () => {
  return (
    <NavLayout>
      <Link
        href="/products/new"
        className="bg-green-500 text-white p-3 mt-3 rounded-lg"
      >
        add new product
      </Link>
    </NavLayout>
  );
};

export default Product;
