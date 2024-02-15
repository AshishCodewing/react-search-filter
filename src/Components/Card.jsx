import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, reviews, prevPrice, newPrice }) {
    return (
        <>
            <div className="card">
                <img className="card-img" src={img} alt="shoes" />
                <div className="card-details">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <div className="card-reviews">
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        <span className="total-reviews">{reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <BsFillBagHeartFill />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;