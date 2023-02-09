import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="bg-red-500 flex h-80 w-64 flex-wrap mx-5 my-5 pl-5 pr-7 pb-14 pt-5 hover:shadow-[0.5px_0.5px_3px_0.2px_rgb(128,128,128)]">
      <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
      <span className="">{name}</span>
      <span className="text-[rgb(104,107,120)]">{cuisines.join(", ")}</span>
      <span>{avgRating}*</span>
      <span>{slaString}</span>
      <span>{costForTwoString}</span>
    </div>
  );
};

export default RestaurantCard;
