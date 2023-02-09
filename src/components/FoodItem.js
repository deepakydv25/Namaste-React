import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{description}</h3>
      <h3>₹ - {price / 100}</h3>
    </div>
  );
};

export default FoodItem;
