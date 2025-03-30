import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    return (
        <div className="m-4 p-4 w-60 rounded-lg bg-gray-100 hover:bg-gray-300">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={
                    CDN_URL + resData.info.cloudinaryImageId
                }
            />
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
            <h4 className="p-1">{resData.info.cuisines.join(", ")}</h4>
            <h4 className="p-1"> Average Rating: {resData.info.avgRatingString}</h4>
            <h4 className="p-1">{resData.info.costForTwo}</h4>
            <h4 className="p-1">{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};


/*export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
*/

export default RestaurantCard;