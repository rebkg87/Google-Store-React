import "./indexWatch.scss";
import Navbar from "../navbar/Navbar";
import Paybox from "../paybox/Paybox";
import { WatchMainPhoto } from "../photos/MainPhoto";
import ProductInformation from "../product-information/ProductInformation";
import { WatchSelectColors } from "../photos/Watch/WatchSelectColors";
import Footer from "../Footer/Footer";

function WatchIndex() {

    return (
        <body>
            <Navbar />
            <main className="main">
                <div className="arrow">
                    <a href=""><img src="./assets/images/icons/Arrow.svg" class="flecha"/></a> <p className="see-product">See product details</p>
                </div>
                <section className="product-details">
                    <section className="left">
                        <WatchMainPhoto />
                    </section>
                    <section className="right">
                        <ProductInformation />
                            <section className="color-paybox">
                                <WatchSelectColors />
                                <Paybox className="paybox"/>
                            </section>
                    </section>
                </section>
            </main>
            <Footer />
        </body>
    )
};

export default WatchIndex;