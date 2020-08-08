import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions/index";
import SingleItem from "./SingleItem";

function CheckoutItems(props) {
  const [fees, setFees] = useState(0);
  const dummyPrice = {
    totalPrice: 0,
    subTotal: 0,
    deliveryCharge: 0,
    savings: 0,
  };
  const [price, setPrice] = useState(props.cart.checkoutData);
  useEffect(() => {
    getDeliveryCharge();
    updatePrice();
  }, []);
  const chargeApi =
    "https://api.rightdelivers.in/user/api/v1/restaurants/charges";
  const getDeliveryCharge = async () => {
    const data = {
      lat: props.address.curAddress.lat,
      lon: props.address.curAddress.lon,
      rid: props.cart.cartItems[0].rid,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        rKey: props.config.authData.rKey,
        dKey: props.config.authData.dKey,
      },
      body: JSON.stringify(data),
    };
    const res = await (await fetch(chargeApi, options)).json();

    if (res && res.status === 0) {
      console.log(res);
      return;
    }
    if (res && res.status === 1) {
      console.log(res);
      setFees(res.charges);
      setPrice({ ...price, deliveryCharge: parseFloat(res.charges) });
      props.setCheckoutData({
        ...props.cart.checkoutData,
        deliveryCharge: parseFloat(res.charges),
        token: res.token,
        distance: res.kms,
      });
      return;
    }
  };
  const updatePrice = () => {
    let amountA = 0;
    let amountS = 0;
    props.cart.cartItems.map((item) => {
      amountA += item.aprice * item.quantity;
      amountS += item.sprice * item.quantity;
      return amountA;
    });

    setPrice({
      ...price,
      subTotal: amountA,
      savings: amountS - amountA,
      totalPrice: parseFloat(price.deliveryCharge) + amountA,
    });

    return () => {
      setPrice(dummyPrice);
    };
  };
  useEffect(() => {
    updatePrice();
    console.log(price);
  }, [
    props.cart.cartItems,
    ...props.cart.cartItems.map((item) => item.quantity),
    props.cart.checkoutData,
  ]);
  return (
    <div>
      <div className="pdpt-bg mt-0">
        <div className="pdpt-title">
          <h4>Order Summary</h4>
        </div>
        <div className="right-cart-dt-body">
          {props.cart.cartItems.map((product) => (
            <SingleItem product={product} />
          ))}
        </div>
        <div className="total-checkout-group">
          <div className="cart-total-dil">
            <h4>Cart Total</h4>
            <span>₹{price.subTotal}</span>
          </div>
          <div className="cart-total-dil pt-3">
            <h4>Fees</h4>
            <span>₹{price.deliveryCharge}</span>
          </div>
        </div>
        <div className="cart-total-dil saving-total ">
          <h4>Total Saving</h4>
          <span>₹{price.savings}</span>
        </div>
        <div className="main-total-cart">
          <h2>Total</h2>
          <span>₹{price.totalPrice}</span>
        </div>
        <div className="payment-secure">
          <i className="uil uil-padlock"></i>Secure checkout
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    config: state.config,
    address: state.address,
    cart: state.cart,
    restaurant: state.restaurant,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCheckoutData: (payload) =>
      dispatch(actionCreators.setCheckoutData(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItems);
