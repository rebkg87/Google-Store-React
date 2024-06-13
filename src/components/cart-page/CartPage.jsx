import Navbar from "../navbar/Navbar"
import "./cart-page-style.scss"
import Summary from "../order-summary/OrderSummary"
import Footer from "../Footer/Footer"


function CartPage ({quantity}) {
    return(
        <>
        <Navbar/>
        <main>
            <h2>Cart</h2>
            <h3>({quantity} items)</h3>
            <section  className="cart-container">
                <section id="cart">
                    <p>Aqui va producto</p>
                    <p>Aqui va producto</p>
                    <p>Aqui va producto</p>

                </section>
                <Summary/>
            </section>
        </main>
        <Footer/>
        </>
    )
}



export { CartPage }