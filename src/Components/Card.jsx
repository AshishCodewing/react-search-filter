import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, price }) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={img} alt="shoes" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <div className="card-price">
            <div className="price">{price}</div>
            <div className="bag">
              <BsFillBagHeartFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
