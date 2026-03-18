import "../css/card.css";

function Card({ product }) {
  let img_url = null;

  if (product.name.includes("Net Play")) {
    img_url = "src/assets/netplay.jpg";
  } else {
    img_url = "src/assets/Team_spirit.webp";
  }

  return (
    <div className="card-holder">
      <div className="img-div">
        <img
          className="card-img"
          src={img_url}
          alt="Product Image"
          height={300}
        />
      </div>
      <div className="card-body">
        <h4>{product.name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          similique!
        </p>
        <p>{product.quantity}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default Card;
