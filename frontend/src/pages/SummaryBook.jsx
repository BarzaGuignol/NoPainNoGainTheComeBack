import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "@components/Nav";
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

  const departure = new Date(booking.departure_date);
  const arrival = new Date(booking.arrival_date);

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center h-[80vh]">
        <div className="mt-20 flex flex-col items-center border-black">
          <h2 className="mt-5 font-medium mx-3">
            Thank you {booking.firstname} {booking.lastname} for your booking !
          </h2>
          <hr className="mt-3 mx-3" />
          <span className="mt-5 mx-3 font-normal">
            Reservation number : #00{id}
          </span>
          <div className="grid grid-cols-2 gap-2 mx-1 mx-0">
            <span className="mt-5 mx-3 font-normal">
              Departure date : {`${departure.toLocaleDateString()}`}
            </span>
            <span className="mt-5 mx-3 font-normal">
              Arrival date : {`${arrival.toLocaleDateString()}`}
            </span>
          </div>
          <span className="mt-5 mx-3 font-normal">{booking.model}</span>
          <img className="w-40" src={booking.picture} alt={booking.model} />
        </div>
      </div>
    </>
  );
}

export default SummaryBook;
