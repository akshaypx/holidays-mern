import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-clients";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import Button from "../components/ui/Button";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );
  const navigate = useNavigate();

  if (!hotelData) {
    return <span>No Hotels Found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Button variant="secondary" onClick={() => navigate("/add-hotel")}>
          Add Hotel
        </Button>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <h2 className="whitespace-pre-line">{hotel.description}</h2>
            <div className="grid grid-cols-5 gap-2 font-bold">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center flex-wrap">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center flex-wrap">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center flex-wrap">
                <BiMoney className="mr-1" />${hotel.pricePerNight}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center flex-wrap">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center flex-wrap">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Button
                variant="secondary"
                onClick={() => navigate("/edit-hotel")}
              >
                View Details
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
