import "./indexWatch.scss";
import Navbar from "../navbar/Navbar";
import Paybox from "../paybox/Paybox";
import { WatchMainPhoto } from "../photos/MainPhoto";
import ProductInformation from "../product-information/ProductInformation";
import { WatchSelectColors } from "../photos/Watch/WatchSelectColors";
import Footer from "../Footer/Footer";
import { PhotoProvider } from "../photos/photo-context";

function WatchIndex() {
  return (
    <PhotoProvider defaultImage= "/assets/images/smartwatch/smartwatch_black.png">
    <div>
      <Navbar />
      <main className="main">
        <div className="arrow">
          <a href="">
            <img src="./assets/images/icons/Arrow.svg" />
          </a>
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
    </div>
    </PhotoProvider>
  );
}

export default WatchIndex;
