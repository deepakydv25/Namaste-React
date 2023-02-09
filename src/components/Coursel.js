import { useEffect, useState } from "react";
import { CAROUSEL_IMG_URL, SWIGGY_URL } from "../config";

const Coursel = () => {
  const [courselRestaurant, setCourselRestaurant] = useState([]);

  useEffect(() => {
    getCourselRestaurant();
  }, []);

  async function getCourselRestaurant() {
    const data = await fetch(SWIGGY_URL);
    const json = await data?.json();

    console.log(json?.data?.cards[0]?.data?.data?.cards);
    setCourselRestaurant(json?.data?.cards[0]?.data?.data?.cards);
  }
  return (
    <div className="bg-[rgb(23,26,41)] px-5 py-0 object-containe">
      <div className="h-[340px] flex max-w-[1200px] min-w-[1200px] items-center mx-0 my-0 relative">
        <div className=" flex w-full">
          {Object.values(courselRestaurant).map((card) => (
            <img
              className="w-[260px] h-[260px] mr-[45px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              key={card?.data?.bannerId}
              src={CAROUSEL_IMG_URL + card?.data?.creativeId}
            />
          ))}
          <button className=""></button>
        </div>
      </div>
    </div>
  );
};

export default Coursel;
