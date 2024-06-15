import "../product-information/ProductInformation.scss";
import PropTypes from "prop-types";

function ProductInformation({ title, subtitle, price }) {
  return (
    <section className="product-info">
      <h1 className="name">{title}</h1>
      <p className="category">{subtitle}</p>
      <h2 className="price">{price} €</h2>
    </section>
  );
}

ProductInformation.propTypes = {
  title: PropTypes.number,
  subtitle: PropTypes.number,
  price: PropTypes.number,
};


export default ProductInformation;
