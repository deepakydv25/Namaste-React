import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="flex h-80 w-64 flex-wrap mx-5 my-5 pl-5 pr-7 pb-14 pt-5 word-wrap hover:shadow-[0.5px_0.5px_3px_0.2px_rgb(128,128,128)]">
      <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
      <span>{name}</span>
      <span>{cuisines.join(", ")}</span>
      <span>{lastMileTravelString} minutes</span>
    </div>
  );
};

export default RestaurantCard;
