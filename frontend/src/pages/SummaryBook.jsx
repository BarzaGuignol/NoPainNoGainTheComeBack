import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";

function SummaryBook() {
  const { id } = useParams();
  const [booking, setBooking] = useState({
    departure_date: "",
    arrival_date: "",
    picture: "",
    firstname: "",
    lastname: "",
  });
  useEffect(() => {
    apiConnexion
      .get(`/booking/${id}`)
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div className="mt-20 flex flex-col border-black">
        <h2 className="mt-5 font-medium mx-3">
          Thank you {booking.firstname} {booking.lastname} for your booking
        </h2>
        <hr className="mt-3 mx-3" />
        <span className="mt-5 mx-3 font-normal">
          Reservation number : #00{id}
        </span>
        <span className="mt-5 mx-3 font-normal">{booking.model}</span>
        <img src={booking.picture} alt={booking.model} />
        <div className="grid grid-cols-2 gap-2 mx-1 mx-0">
          <span className="mt-5 mx-3 font-normal">
            Departure date : {booking.departure_date}
          </span>
          <span className="mt-5 mx-3 font-normal">
            Arrival date : {booking.arrival_date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SummaryBook;
