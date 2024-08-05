import { useContext } from "react";
import { Cartcontext } from "./App";
import PropTypes from 'prop-types';
const Productcard = ({ id, title, price, description, category, image, rating, available }) => {
    const { carincre, cardecre } = useContext(Cartcontext)
    return (
        <>
            <div className="card-deck text-center" style={{ width: "25rem", display: "inline-flex", margin: "40px 10px 100px 60px", textAlign: "center", }}>
                <div className="card" style={{ height: "535px", borderRadius: 20 }}>
                    <img src={image} className="card-img-top" alt="..." style={{ width: 180, height: 180, marginLeft: 100 }} />
                    <div className="card-body" style={{ display: "inline-block", }}>
                        <hr />
                        <h4 className="card-title">{title}</h4>
                        <h4>Price:{price}</h4>
                        <p>Category:{category}</p>
                        <p>Quantity:{rating.count}</p>
                        <p>Rating:{rating.rate}</p>
                    </div>
                    {available ? (<button type="button" className="btn btn-outline-dark m-4" onClick={() =>
                        cardecre(id)} style={{ backgroundColor: "orange" }}>Remove from Cart</button>)
                        :
                        (<button type="button" className="btn btn-outline-dark m-4" onClick={() =>
                            carincre({ id, title, price, description, category, image, rating })}>Add to Cart</button>)}
                </div>
            </div>
        </>
    )
}
Productcard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    }),
    available: PropTypes.bool
}
export default Productcard;