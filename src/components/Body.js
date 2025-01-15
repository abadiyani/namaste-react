//Component import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//package import
import { useEffect, useState } from "react";

const Body = () => {
  //state variable creation using -> useState()
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //useEffect for fetching data via api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            //Updating the state variable; this will cause the Body component to re-render
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
