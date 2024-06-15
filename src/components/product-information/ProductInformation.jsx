import "../product-information/ProductInformation.scss";
import PropTypes from "prop-types";

function ProductInformation({ title, subtitle, price }) {
  return (
    <section className="product-info">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <h2>{price} €</h2>
    </section>
  );
}

ProductInformation.propTypes = {
  title: PropTypes.number,
  subtitle: PropTypes.number,
  price: PropTypes.number,
};


export default ProductInformation;
