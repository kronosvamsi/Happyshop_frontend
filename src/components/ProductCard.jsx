function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="rounded-lg mb-4"
      />

      <h3 className="font-semibold text-lg text-black">{product.name}</h3>
      <p className="text-gray-500 mb-2">₹{product.price}</p>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
