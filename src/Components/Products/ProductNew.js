import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import { imgUrl } from "../../config";
import * as actionCreators from "../../Store/actions/index";
import "./product.css";
import Customizer from "./Customizer";

function ProductNew(props) {
  const product = { ...props.data };
  const [show, setShow] = useState(false);
  const [custProduct, setCustProduct] = useState({});
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const fallBackImage = Object.values(props.config.services).find((service) => service.link === props.match.params.service).appimage

  const customPrices =
    props.data.custmz === 1
      ? JSON.parse(props.data.ldesc).options.map((obj) => Object.values(obj)[1])
      : "";

  useEffect(() => {
    const found = props.cart.cartItems.filter((el) => el.pid === product.pid);
    if (found.length > 0) {
      setAdded(true);
      setQuantity(found[0].quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart.cartItems]);
  const increment = () => {
    setQuantity(quantity + 1);
    const payload = {
      pid: product.pid,
      quantity: quantity + 1,
    };
    props.setQuantity(payload);
  };
  const decrement = () => {
    if (quantity === 1) {
      props.deleteCartItem(product.pid);
      setAdded(false);
      return;
    }
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const payload = {
        pid: product.pid,
        quantity: quantity - 1,
      };
      props.setQuantity(payload);
    }
  };
  const sendProduct = () => {
    props.setCurProduct(product);
  };
  const handleCart = () => {
    if (product.custmz === 1) {
      setCustProduct(product);
      setShowCustomizer(true);
    } else {
      const payload = {
        ...props.data,
        selectedOption: "",
        selectedExtras: [],
        itemPrice: props.data.aprice,
        extraPrice: 0,
        quantity: quantity,
      };
      addToCart(payload);
    }
  };
  const addToCart = (payload) => {
    setShowCustomizer(false);
    if (props.cart.cartItems.length > 0) {
      if (props.cart.cartItems[0].rid === props.data.rid) {
        setAdded(true);
        props.addToCart(payload);
      } else {
        setShow(true);
      }
    } else {
      setAdded(true);
      props.addToCart(payload);
    }
  };

  const handleClose = () => {
    setAdded(false);
    setShow(false);
  };
  const handleClearAndAdd = () => {
    setAdded(true);
    const payload = {
      ...props.data,
      quantity: quantity,
    };
    props.clearAndAdd(payload);
    setShow(false);
  };
  const notifModal = (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body>
        You have chosen item from different service. Click Update cart to clear
        the cart and add item from current service.
      </Modal.Body>
      <Modal.Footer>
        <button className="added-cart-btn" onClick={handleClose}>
          Close
        </button>
        <button className="add-cart-btn hover-btn" onClick={handleClearAndAdd}>
          Update Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <div className="col col-12 d-block">
      {notifModal}

      <div
        className="row product-item-mbl mb-3 pt-3 pb-3 align-items-center no-gutters"
        style={{ boxShadow: "0px 3px 4px 2px rgba(0, 0, 0, .14)" }}
      >
        <div className="col col-3">
          <div className="">
            <span className="notify-badge">
              <span
                style={{
                  border: "2px solid black",
                  padding: "0px 2px",
                  height: "8px",
                  borderRadius: "3px",
                  marginRight: "5px",
                }}
              >
                <i
                  className="fas fa-circle x c3 dot"
                  style={{
                    fontSize: "8px",
                    color:
                      props.data.type === 1
                        ? "lightgreen"
                        : props.data.type === 2
                        ? "brown"
                        : "red",
                  }}
                ></i>
              </span>
            </span>
            <Image
              src={
                props.data.img
                  ? imgUrl + "restaurants/items/" + props.data.img
                  : imgUrl + "services/" + fallBackImage
              }
              style={{ padding: "9px" }}
              fluid
            />
          </div>
        </div>
        <div className="col col-6">
          <div className="product-text-dt-mbl">
            <span style={{ fontSize: "14px" }}>{props.data.name}</span>
            <br />
            <span style={{ color: "grey" }}>{props.data.sdesc}</span>
            {product.custmz === 1 && customPrices.length > 0 ? (
              <div className="d-flex">
                Starts from ₹{Math.min(...customPrices)}
              </div>
            ) : (
              <div className="product-price-mbl">
                ₹{props.data.aprice} <span> ₹{props.data.sprice}</span>
              </div>
            )}
          </div>
        </div>
        <div className="col col-3 d-flex flex-column">
          {!added ? (
            <>
              <button className="add-cart-btn-mbl" onClick={handleCart}>
                <span>+ ADD</span>
              </button>
            </>
          ) : (
            <div className="quantity">
              <input
                type="button"
                value="-"
                onClick={decrement}
                className="btns-qty"
              />
              <input
                type="text"
                disabled
                name="quantity"
                value={quantity}
                className="text-qty"
              />
              <input
                type="button"
                value="+"
                onClick={increment}
                className="btns-qty"
              />
            </div>
          )}
          {product.custmz === 1 && (
            <div
              style={{
                color: "orange",
                fontSize: "10px",
                textAlign: "center",
                padding: "5px 15px",
              }}
            >
              Customizable
            </div>
          )}
        </div>
      </div>
      {showCustomizer && (
        <Customizer
          show={showCustomizer}
          onClose={() => setShowCustomizer(false)}
          product={custProduct}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    config: state.config,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch(actionCreators.addToCart(payload)),
    clearAndAdd: (payload) => dispatch(actionCreators.clearAndAdd(payload)),
    setCurProduct: (payload) => dispatch(actionCreators.setCurProduct(payload)),
    setQuantity: (payload) => dispatch(actionCreators.setQuantity(payload)),
    deleteCartItem: (pid) => dispatch(actionCreators.deleteCartItem(pid)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductNew)
);
