import Navbar from "../navbar/Navbar";
import Paybox from "../paybox/Paybox";
import ColorEarbuds from "../color-earbuds/ColorEarbuds";
import ProductInformation from "../product-information/ProductInformation";
import Footer from "../Footer/Footer";
import { EarbudsPhotoSection } from "../photos/MainPhoto";
import "./indexEarbuds.scss";

function IndexEarbuds() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="earbuds-details">
          <img src="../../../public/assets/images/icons/Arrow.svg"></img>
          <p>See product details</p>
        </div>
        <section className="wrapper-photos">
          <EarbudsPhotoSection />
          <div className="wrapper">
            <div className="product-info">
              <ProductInformation
                title="Google Pixel Buds Pro"
                subtitle="Music & Sound"
                price="229"
              />
            </div>
            <div className="cart-container">
              <div className="choose-color">
                <ColorEarbuds />
              </div>
              <div className="add-to-cart">
                <Paybox price="229" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default IndexEarbuds;
