import "./productCart.scss";
import PropTypes from "prop-types";
import "../delivery/Delivery";
import Delivery from "../delivery/Delivery";
import { BlackWatch } from "../photos/Watch/watchesPhotoElements";
import "../photos/photos-style.scss"

function ProductCart({ title, price }) {

    return (
    <div className="product">
        <div className="photoContainer">
            <BlackWatch photoClass="cartPhoto"/>
        </div>
        <div className="textContent">
        <p className="text">Title{title}</p>
        <div className="quantity">
            <div className="cant">
            <p className="text">Cant:</p>
            <select className="select" name="select">
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
            <p className="text">0{price}</p>
        </div>
        <p className="removeButton">Remove</p>
        <div className="deliveryContainer">
            <Delivery />
        </div>
        </div>
    </div>
  );
}

ProductCart.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
};

export default ProductCart;
