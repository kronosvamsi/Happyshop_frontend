import { useState, useEffect } from "react";
import Card from "./Card";
import "../css/products.css";
function Products() {
  const [prod, setProd] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProd = async () => {
      try {
        const url = "http://127.0.0.1:8000/products/";
        const result = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const products = await result.json();
        console.log("data", products);
        if (Object.hasOwn(products, "data")) {
          console.log("yes");
          setProd(products.data);
        }
      } catch (err) {
        console.log("Error occured:", err);
      }
    };

    fetchProd();
  }, []);

  return (
    <div className="Product-container">
      <h2>Products</h2>
      <div className="Products-list">
        {prod.length > 0 && prod.map((p) => <Card key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default Products;
