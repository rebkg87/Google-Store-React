import Button from "../button/Button";
import "./paybox.scss"

function Paybox() {
  return (
    <div className="shopping-cart">
      <div className="price-cart">
        <h2>229 €</h2>
        <hr />
      </div>
      <div className="wrapper-cart">
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
      </div>
    </div>
  );
}

export default Paybox;
