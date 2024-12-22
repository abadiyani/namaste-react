import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRatingString, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL+resData.info.cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
}

export default RestaurantCard;