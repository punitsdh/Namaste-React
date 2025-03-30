import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {

    const [listofRestaurants, setlistofRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGlng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setlistofRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return (
            <h1>Looks like you're offline!! Please check your internet connection</h1>
        );


    return listofRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className = "search m-4 p-4">
                    <input 
                        type = "text" 
                        className="border border-solid border-black px-2 py1 rounded-lg" 
                        value={searchText} 
                        onChange={(e) =>{
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-slate-200 m-4 rounded-lg hover:bg-gray-400"
                        onClick={() => {
                            const filteredList = listofRestaurants.filter((res) => {
                                return res.info.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                            });

                            setFilteredRestaurant(filteredList);
                        }}
                    >Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-gray-400"
                    onClick={() => {
                        const filteredList = listofRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setlistofRestaurants(filteredList);
                    }}>    
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
                    <RestaurantCard  resData={restaurant}/> 
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;