import Button from "../button/Button";
import "../order-summary/OrderSummary.scss";

function Summary () {
    return (
        <section className="content-recive">
           
                <h3>Order Summary</h3>
            <div className="final-recive">
                <div className="item">
                    <span className="text-bold">Subtotal</span>
                    <span className="text-price">€</span>
                </div>
                <div className="item">
                    <span className="text-bold">Shipping costs</span>
                    <span className="text-price">€</span>
                </div>
                <div className="item">
                    <span className="text-bold">estimated VAT</span>
                    <span className="text-price">Including</span>
                </div>

                <hr></hr>
                <div className="item">
                    <span className="text-bold">Total estimated</span>
                    <span className="text-price">€</span>
                </div>
                <div className="div-p">
                    <p>or €144.60/month</p>
                    <p>with 3 monthly installments *</p>
                </div>
            </div>
            <div className="button">
            <Button title="Complete the purchase"/>
            </div>
        </section >
    )
};

export default Summary;
