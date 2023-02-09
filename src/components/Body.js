import { restaurantList, SWIGGY_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import Coursel from "./Coursel";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_URL);
    const json = await data?.json();

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <Coursel />
      </div>
      <div className="pl-2 my-5 mx-[144px] flex justify-center">
        <input
          type="text"
          className="placeholder:italic bg-white border border-slate-300 rounded-full py-1 pl-9 pr-[300px] shadow-sm focus:outline-none focus:border-orange focus:ring-orange focus:ring-1"
          placeholder="Search Restaurant..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-orange border border-white rounded-full py-1 px-5 ml-7 text-cyan-50 hover:bg-white hover:text-orange hover:border-orange"
          onClick={() => {
            // need to filete the data
            const data = filterData(searchInput, allRestaurants);

            // update the state - restaurants
            setFillteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap px-2 py-4 mx-[144px]">
        {fillteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
