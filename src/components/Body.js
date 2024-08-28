import React, { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // state variables hooks  => super powerful varibales
  // hooks are normal javascript functions given by react
  // whenever the state changes react will rerender the component

  // Reconcilation Algorithm Diff Algorithm
  // this alorithm came in react 16 version
  // also called as React Fiber
  // dom is like a tree
  // react creates virtual dom => its representation of actual dom  its an Object
  // it find out the difference between old virtual dom and new virtual dom on every render and then
  // it will update the actual dom

  // approach 

    // loads the page ====>>> Render all the jsx =====> api called ====> re-render

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
    // whenever state varibales update, react triggers a reconciliation cycle(re-render the component)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };
  // const handleRatings = () => {
  //  let data = resList.filter((res) => res.info.avgRating > 4)
  //  console.log('filter btn', data)
  //  setData(data)
  // }

  if(onlineStatus === false) return <h1>Oops Check your Internet Connectivity!!!</h1>

  if (listOfRestaurant?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text"  className="border border-solid border-black" value={searchText} onChange={(e)=> {
            setSearchText(e.target.value)
          }} />
          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={()=> {
            const searchData = listOfRestaurant?.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log('search',searchData)
            setFilteredRestaurant(searchData)
          }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">     <button
        className="filter-btn"
        onClick={() => {
          const filterList = resList?.filter((res) => res.info.avgRating > 4);
          setListOfRestaurant(filterList);
        }}
      >
        Top Rated Restaurants
      </button></div>
   
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
          {
            // if the Restaurant card is having rating more than 4 then it will show HOC which is RestaurantCardPromoted 
            // else it will show RestaurantCard
            restaurant.info.avgRatingString > 4 ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard  resData={restaurant} />
          }
          
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
