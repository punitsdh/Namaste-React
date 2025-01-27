import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

        console.log(json);
        setlistofRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return listofRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className = "search">
                    <input 
                        type = "text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) =>{
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="searchBtn"
                        onClick={() => {
                            const filteredRestaurant = listofRestaurants.filter((res) => {
                                return res.info.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                            });

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >Search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setlistofRestaurants(filteredList);
                }}>    
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
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