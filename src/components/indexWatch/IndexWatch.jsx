import "./indexWatch.scss";
import Paybox from "../paybox/Paybox";
import { WatchMainPhoto } from "../photos/MainPhoto";
import ProductInformation from "../product-information/ProductInformation";
import { WatchSelectColors } from "../photos/Watch/WatchSelectColors";
import Footer from "../Footer/Footer";

function WatchIndex() {
  return (
    <body>
      <main className="main-watch">
        <div className="arrow">
          <a href="">
            <img src="./assets/images/icons/Arrow.svg" />
          </a>{" "}
          <p className="see-product">See product details</p>
        </div>
        <section className="product-details">
          <section className="left">
            <WatchMainPhoto />
          </section>
          <section className="right">
            <ProductInformation
              title="Fitbit Inspire 3"
              subtitle="Health & Fitness Tracker"
              price="99,95"
            />
            <section className="color-paybox">
              <WatchSelectColors />
              <Paybox price="99,95" className="paybox" />
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default WatchIndex;
