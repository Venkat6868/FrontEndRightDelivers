import React, { useState, useEffect } from "react";
import { geolocated } from "react-geolocated";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Map from "./Map";
import MblNavbar from "../Common/MblNavbar";
import { Toast } from "react-bootstrap";
import * as geolib from "geolib";
import * as actionCreators from "../../Store/actions/index";
import { baseUrl } from "../../config";
import {fetchWithTimeout} from '../../api';

function AddAddressFromMap(props) {
  const [showMap, setShowMap] = useState(true);
  const mapData = props.restaurant.curRestaurant;
  const mapPoints = props.config.curBranch.points;
  const history = useHistory();
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const [isServicable, setIsServicable] = useState(true);
  const [cords, setCords] = useState({
    lat: mapData.lat,
    lng: mapData.lon,
  });
  const emptyLoginData = {
    id: "",
    name: props.config.authData.user.name,
    type: 1,
    new: true,
    phone: props.config.authData.phone,
    flat: "",
    street: "",
    // address: "",
    area: "",
    city: "",
    lat: mapData.lat,
    lng: mapData.long,
  };
  const handleCloseMap = () => {
    if (isServicable) {
      setShowMap(false);
    } else {
      setError("We can't deliver to your location.");
      setShowToast(true);
    }
  };
  const [loginData, setLoginData] = useState(emptyLoginData);
  useEffect(() => {
    setCords({
      lat: mapData.lat,
      lng: mapData.lon,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const calculateService = (lat, lon) => {
    const pointsPolygon = [];
    mapPoints.map((point) =>
      pointsPolygon.push({ latitude: point[1], longitude: point[0] })
    );
    const isInPolygon = geolib.isPointInPolygon(
      { latitude: lat, longitude: lon },
      pointsPolygon
    );
    setIsServicable(isInPolygon);
  };
  const validateForm = () => {
    return true;
  };
  const handleSubmit = (e) => {
    if (isServicable) {
      e.preventDefault();
      if (validateForm()) {
        saveAddress()
      }
    } else {
      e.preventDefault();
      setError("We can't deliver to your location.");
      setShowToast(true);
    }
  };
  const saveAddress = async () => {
    const apiUrl = baseUrl + "add/address";
    const data = {
      flat: loginData.flat,
      area: loginData.area,
      city: loginData.city,
      lat: loginData.lat,
      lon: loginData.lon,
      type: loginData.type
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

    const res = await (await fetchWithTimeout(apiUrl, options)).json();

    if (res && res.status === 1) {
      setError(res.msg);
      setShowToast(true);
      props.setAddressList(res.address);
      history.goBack();
      return;
    }
    if (res) {
      setError(res.msg);
      setShowToast(true);
      return;
    }
  }

  const handleAddressFromMap = (data) => {
    setLoginData({
      ...loginData,
      area: data.address,
      // street: data.area,
      city: data.area,
      lat: data.mapPosition.lat,
      lon: data.mapPosition.lng,
    });
    calculateService(data.mapPosition.lat, data.mapPosition.lng);
  };
  const handleBack = () => {
    history.push("/checkout");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const errorToast = (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={2000}
      autohide
      style={{
        position: "fixed",
        bottom: "20vh",
        zIndex: "999",
        textAlign: "center",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Toast.Body
        style={{
          backgroundColor: "#2f4f4f",
          color: "white",
          borderBottom: "none",
          textAlign: "center",
          padding: "0.2rem 0.8rem",
        }}
      >
        {<strong className="mr-auto">{error}</strong>}
      </Toast.Body>
    </Toast>
  );
  const addressForm = (
    <>
      <MblNavbar heading="Add Address" back={() => history.goBack()} />
      {errorToast}
      <div
        className="all-product-grid container"
        style={{ padding: "2px 15px" }}
      >
        <div className="row" style={{ marginTop: "8vh" }}>
          <div className="col-lg-12 container checout-address-step">
            <form className="" onSubmit={handleSubmit}>
              <div className="address-fieldset">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <div className="product-radio">
                        <ul className="product-now">
                          <li>
                            <input
                              type="radio"
                              name="address1"
                              id="ad1"
                              checked={loginData.type === 1}
                              onChange={() =>
                                setLoginData({ ...loginData, type: 1 })
                              }
                            />
                            <label htmlFor="ad1">Home</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="address2"
                              id="ad2"
                              checked={loginData.type === 2}
                              onChange={() =>
                                setLoginData({ ...loginData, type: 2 })
                              }
                            />
                            <label htmlFor="ad2">Office</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="address3"
                              id="ad3"
                              checked={loginData.type === 3}
                              onChange={() =>
                                setLoginData({ ...loginData, type: 3 })
                              }
                            />
                            <label htmlFor="ad3">Other</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {loginData.area && (
                    <div className="address-item">
                      <div className="address-dt-all">
                        <p
                          style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: "bold",
                            justifyContent: "space-between",
                          }}
                        >
                          Selected Address
                          <div
                            className="d-flex"
                            onClick={() => setShowMap(true)}
                          >
                            Edit
                            <i className="uil uil-edit"></i>
                          </div>
                        </p>
                        <p>{loginData.area}</p>
                      </div>
                    </div>
                  )}

                  <div
                    className="col-lg-6 col-md-12"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="form-group">
                      <label className="control-label">
                        Flat / House / Office No.*
                      </label>
                      <input
                        id="flat"
                        name="flat"
                        type="text"
                        placeholder="Flat No."
                        value={loginData.flat}
                        onChange={handleChange}
                        className="form-control input-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="address-btns">
                        <div className="">
                          <button
                            type="submit"
                            className="save-btn14 hover-btn"
                          >
                            Add Address
                          </button>
                        </div>
                        <div className="col">
                          <button
                            onClick={handleBack}
                            className="next-btn16 hover-btn float-right"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  const mapView = (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      {errorToast}
      <Map
        google={props.google}
        center={cords}
        height="100%"
        zoom={15}
        handleAddressFromMap={handleAddressFromMap}
        handleCloseMap={handleCloseMap}
        isServicable={isServicable}
        setError={setError}
        setShowToast={setShowToast}
      />
    </div>
  );
  return showMap ? mapView : addressForm;
}

const mapStateToProps = (state) => {
  return {
    address: state.address,
    config: state.config,
    cart: state.cart,
    restaurant: state.restaurant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewAddress: (payload) => dispatch(actionCreators.addNewAddress(payload)),
    setAddressList: (payload) =>
      dispatch(actionCreators.setAddressList(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })(AddAddressFromMap)
);
