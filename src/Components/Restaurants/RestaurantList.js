import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import Header from "../Header/Header";
import StickyCart from "../StickyCart";
import Spinner from "../Common/Spinner";
import * as actionCreators from "../../Store/actions/index";

function RestaurantList(props) {
  const step = 8;
  const baseUrl = props.config.baseUrl;
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const getData = () => {
    setIndex(index + step);
    const newProds = props.restaurants.items.slice(index, index + step);
    setItems((prevState) => prevState.concat(newProds));
  };
  useEffect(() => {
    loadRestaurants();
    getDateTime();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    getData();
  };
  useEffect(() => {
    getData();
    setLoadMore(false);
  }, [loadMore]);
  const apiUrl =
    baseUrl +
    props.match.params.service +
    "/?branch=" +
    props.config.curBranch.bid;
  const loadRestaurants = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    const res = await (await fetchWithTimeout(apiUrl, options)).json();
    if (res) {
      props.updateRestaurants(res);
      setLoading(false);
      setItems(res.restaurants);
    }
  };
  const noItems = (
    <div
      style={{
        color: "#d30013",
        fontSize: "20px",
        padding: "40px",
        marginTop: "20%",
        textAlign: "center",
      }}
    >
      No Restaurants in this Branch yet...
    </div>
  );
  const loadSpinner = (
    <div>
      <Spinner />
    </div>
  );
  const afterLoading = (
    <>
      <Header />
      <StickyCart />
      <div className="all-product-grid mar-15">
        {items.length > 0 ? (
          <div className="container">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Shop items in</span>
                <h3>Restaurants</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product-list-view">
                  <div className="row">
                    {items.map((item) => (
                      <RestaurantItem data={item} />
                    ))}
                  </div>
                  <div class="col-md-12">
                    <div class="more-product-btn">
                      <button class="show-more-btn hover-btn" onClick={getData}>
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          noItems
        )}
      </div>
    </>
  );
  return <>{loading ? loadSpinner : afterLoading}</>;
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant,
    config: state.config,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateRestaurants: (payload) =>
      dispatch(actionCreators.updateRestaurants(payload)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
);
