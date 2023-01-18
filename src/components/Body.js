import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2027489&lng=72.95860569999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // not render component (early return)
  // if (!allRestaurants) return null;

  // if (fillteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
        {fillteredRestaurants.map((restaurant) => {
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
