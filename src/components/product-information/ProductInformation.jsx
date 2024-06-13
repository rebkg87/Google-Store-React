import "../product-information/ProductInformation.scss";

function ProductInformation  ({title ,subtitle,price}) {
    return (
        <section className="product-info">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h2>{price}</h2>
        </section>
    )
};
//Google Pixel Buds Pro
//Music & Sound
//229 €
export default ProductInformation;
