import Navbar from "../navbar/Navbar"
import "./cart-page-style.scss"

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
                    <p>Aqui va producto</p>
                    <p>Aqui va producto</p>
                    <p>Aqui va producto</p>

                </section>
                <p className="summary-container">AQUI VA ORDER SUMMARY</p>
            </section>
        </main>
        <p>Aqui va footer</p>
        </>
    )
}



export { CartPage }