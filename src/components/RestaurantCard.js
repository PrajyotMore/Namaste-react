import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData} = props;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId} = resData.info
   
    return (
  
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">

        <img  className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} stars</h5>
        <h5>{sla.slaString}</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;