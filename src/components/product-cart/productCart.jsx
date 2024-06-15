import "./productCart.scss";
import PropTypes from "prop-types";
import "../delivery/Delivery";
import Delivery from "../delivery/Delivery";
/* import { BlackWatch } from "../photos/Watch/watchesPhotoElements"; */
import "../photos/photos-style.scss"

function ProductCart({ title, price, photo }) {

    return (
    <div className="product">
        <div className="photoContainer">
            {photo}
        </div>
        <div className="textContent">
            <p className="text">{title}</p>
            <div className="quantity-cart">
                <div className="cant">
                    <p className="text">Cant:</p>
                    <select className="select-cart" name="select">
                        <option value="value1">1</option>
                        <option value="value2">2</option>
                        <option value="value3">3</option>
                        <option value="value3">4</option>
                        <option value="value3">5</option>
                        <option value="value3">6</option>
                        <option value="value3">7</option>
                        <option value="value3">8</option>
                        <option value="value3">9</option>
                        <option value="value3">10</option>
                    </select>
                </div>
                <p className="text">{price}</p>
            </div>
            <p className="removeButton">Remove</p>
            <div className="deliveryContainer">
                <Delivery />
            </div>
        </div>
    </div>
    
    );
}

/* 
<BlackWatch photoClass="cartPhoto"/>
*/

ProductCart.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
};

export default ProductCart;
