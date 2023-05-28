import classes from "../styles/paymentInfo.module.css";
import scroll from "../assets/ancient-scroll.png";

const PaymentInfo = () => {
  return (
    <div className={classes.paymentInfo}>
      <div style={{ width: "100%" }}>
        <div className={classes.content}>
          <div className={classes.details}>
            <p>Company</p>
            <h3>Apple</h3>
          </div>
          <div className={classes.details}>
            <p>Order Number</p>
            <h3>1266201</h3>
          </div>
          <div className={classes.details}>
            <p>Product</p>
            <h3>Macbook Air</h3>
          </div>
          <div className={classes.details}>
            <p>VAT (20%)</p>
            <h3>$100.00</h3>
          </div>
          <br />
        </div>
        <div className={classes.summary}>
          <div className={classes.leftcircle}></div>
          <div className={classes.rightcircle}></div>
          <br />
          <p className={classes.title}>You have to pay</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className={classes.amount}>
              549.<small>99</small>
              <small>USD</small>
            </p>
            <img src={scroll} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
