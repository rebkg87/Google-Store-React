import "./cart-page-style.scss"
import Summary from "../order-summary/OrderSummary"
import Footer from "../Footer/Footer"
import ProductCart from "../product-cart/productCart"
import { BlackWatch, YellowWatch, PinkWatch } from "../photos/Watch/watchesPhotoElements";
import { EarbudsCase } from "../photos/Earbuds/earbudsPhotoElements"
import { smartwatch, earbuds  } from "../../data";

function destructur () {

}


function CartPage ({quantity}) {
    return(
        <>
        <main className="main-cart">
            <h2>Cart</h2>
            <h3>({quantity} items)</h3>
            <section  className="cart-container-cart-page">
                <section id="cart">
                    <ProductCart  photo=<EarbudsCase photoClass="cartPhoto"/> title={earbuds[0].title} price={parseFloat(earbuds[0].price).toFixed(2) + " €"}/>
                    <hr />
                    <ProductCart photo=<BlackWatch photoClass="cartPhoto"/> title={smartwatch[0].title} price={smartwatch[0].price + " €"}/>
                </section>
                <Summary subtotal="328.95" total="333.85"/>
            </section>
        </main>
        <Footer/>
        </>
    )
}



export { CartPage }