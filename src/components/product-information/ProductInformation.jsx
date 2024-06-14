import "../product-information/ProductInformation.scss";
import PropTypes from "prop-types";

function ProductInformation  ({title ,subtitle,price}) {
    return (
        <section className="product-info">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h2>{price}</h2>
        </section>
    )
}


ProductInformation.propTypes = {
    title: PropTypes.number,
    subtitle: PropTypes.number,
    price: PropTypes.number,
  };
//Google Pixel Buds Pro
//Music & Sound
//229 €
export default ProductInformation;
