import { fetchHotels } from "@/utils";
import Link from "next/link";

const HotelCard = async () => {
  const allHotels = await fetchHotels();

  return (
    <div className="section-containter">
      {allHotels?.result.map((hotel: any) => (
        <div
          key={hotel.hotel_id}
          className="my-5 rounded-md bg-slate-900 py-6 px-10 flex flex-col items-center justify-between gap-5 lg:flex-row"
        >
          <div>
            <h3 className="text-2xl font-semibold">{hotel.name}</h3>
            <p className="md:mt-3 mt-8 text-gray-300">
              {hotel.hotel_description}
            </p>
            <div className=" flex justify-between mt-5 gap-8 flex-wrap text-gray-300 text-sm">
              <p>
                <span className="font-medium">City Name:</span> {hotel.city}
              </p>
              <p>
                <span className="font-medium">Check In Time:</span> From{" "}
                {hotel.checkin_checkout_times.checkin_from} to{" "}
                {hotel.checkin_checkout_times.checkin_to || "23:00"}
              </p>
              <p>
                <span className="font-medium">Address: </span>
                {hotel.address}
              </p>
            </div>
          </div>

          <div className="ml-5">
            <Link
              href={hotel.url}
              className="bg-[#FF6A6A] py-3 px-8 rounded-lg text-sm hover:bg-red-800"
            >
              Visit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
