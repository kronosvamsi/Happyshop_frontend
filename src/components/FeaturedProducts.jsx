import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data.data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" w-full px-8 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
