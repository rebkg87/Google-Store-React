import Button from "../button/Button";
import Delivery from "../delivery/Delivery";
import "./paybox.scss";
import PropTypes from "prop-types";

function Paybox({ price }) {
  return (
    <div className="shopping-cart">
      <div className="price-cart">
        <h2>{price} €</h2>
        <hr />
      </div>
      <div className="quantity">
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
        <Button className="add-to-cart" title="Add to cart" />
      </div>
      <Delivery />
    </div>
  );
}

Paybox.propTypes = {
  price: PropTypes.number,
};

export default Paybox;
