//Component import
import RestaurantCard from "./RestaurantCard";
//Data import
import resList from "../../utils/mockData";
//package import
import { useState } from "react";


const Body = () => {
    //state variable creation using -> useState()
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //Filter Logic
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    //Updating the state variable; this will cause the Body component to re-render
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
}

export default Body;