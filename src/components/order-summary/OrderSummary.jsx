import Button from "../button/Button";
import "../order-summary/OrderSummary.scss";


function Summary ({subtotal, total}) {
    return (
        <section className="content-recive">
                <h3>Order Summary</h3>
            <div className="final-recive">
                <div className="item">
                    <p className="text-bold">Subtotal</p>
                    <p className="text-price">€ {subtotal}</p>
                </div>
                <div className="item">
                    <p className="text-bold">Shipping costs</p>
                    <p className="text-price">€ 4.90</p>
                </div>
                <div className="item">
                    <p className="text-bold">estimated VAT</p>
                    <p className="text-price">Including</p>
                </div>

                <hr></hr>
                <div className="item total">
                    <p className="text-bold">Total estimated</p>
                    <p className="text-price">€ {total}</p>
                </div>
                <div className="div-p">
                    <p className="text-footer">or €144.60/month</p>
                    <p className="text-footer">with 3 monthly installments *</p>
                </div>
            </div>
            <div >
            <Button title="Complete the purchase" className="button"/>

            </div>
        </section >
    )
};

export default Summary;
