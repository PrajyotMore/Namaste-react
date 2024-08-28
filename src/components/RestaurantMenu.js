import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;
  console.log("resInfo", resInfo);


  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    "item"
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
      {/* Categories Accordion */}
      {
        categories.map((category,index) => 
          // Controlled Component
        <RestaurantCategory 
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
         />)
      }
    </div>
  );
};

export default RestaurantMenu;
