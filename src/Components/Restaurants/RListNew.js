import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import RItemNew from "./RItemNew";
import Header from "../Header/Header";
//import StickyCart from "../StickyCart";
import Spinner from "../Common/Spinner";
import * as actionCreators from "../../Store/actions/index";
import MblNavbar from "../Common/MblNavbar";
import Search from "../Common/Search/Search";
import { fetchWithTimeout } from '../../api';

function RestaurantList(props) {
  const step = 8;
  const baseUrl = props.config.baseUrl;
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  //search
  useEffect(() => {
    const filteredData = loadedData.filter((data) => {
      if (searchInput === "") {
        return data;
      }
      if (
        data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.disc.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return data;
      }
    });
    setItems(filteredData);
  }, [searchInput]);
  const getData = () => {
    setIndex(index + step);
    const newProds = props.restaurants.items
      ? props.restaurants.items.slice(index, index + step)
      : [];
    setItems((prevState) => prevState.concat(newProds));
  };

  useEffect(() => {
    // if(props.restaurants.refreshRestaurants){
    //   setLoading(true)
    //   loadRestaurants();
    // }
    setLoading(true);
    loadRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    getData();
  };
  const pushBack = () => history.goBack();
  useEffect(() => {
    getData();
    setLoadMore(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore]);
  const apiUrl =
    baseUrl +
    props.match.params.service +
    "/?branch=" +
    props.config.curBranch.bid;
  const loadRestaurants = async () => {
    setItems([]);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    const res = await (await fetchWithTimeout(apiUrl, options, 3000)).json();
    if (res) {
      //props.updateRestaurants(res);
      props.setLoadedRestaurants(res);
      setItems(res.shops);
      setLoadedData(res.shops);
      setLoading(false);
    }
  };
  const noItems = (
    <div
      style={{
        color: "#2f4f4f",
        fontSize: "20px",
        padding: "40px",
        marginTop: "20%",
        textAlign: "center",
      }}
    >
      No Shops
    </div>
  );
  const loadSpinner = (
    <div>
      <Spinner />
    </div>
  );
  const afterLoading = (
    <>
      <div className="d-none d-sm-block">
        <Header />
      </div>
      <div className="d-block d-sm-none">
        <MblNavbar
          heading={
            props.match.params.service.charAt(0).toUpperCase() +
              props.match.params.service.slice(1) || "Shops"
          }
          back={pushBack}
        />
      </div>

      <div className="all-product-grid mar-15">
        <Search
          displayText={`Search ${
            props.match.params.service.charAt(0).toUpperCase() +
              props.match.params.service.slice(1) || "Shops"
          }`}
          handleSearch={handleSearch}
          onClear={() => setSearchInput("")}
          value={searchInput}
        />
        {items.length > 0 ? (
          <div className="container">
            <div className="row">
              {items.map((item) => (
                <RItemNew data={item} key={item.id} />
              ))}
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
    setLoadedRestaurants: (payload) =>
      dispatch(actionCreators.setLoadedRestaurants(payload)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
);
