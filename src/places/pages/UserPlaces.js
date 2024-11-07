import React from "react";
import { useParams } from "react-router-dom";

import "./UserPlaces.css";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "CN Tower",
    description: "One of the best place in Toronto",
    imageUrl: "https://i.imgur.com/OB0y6MR.jpg",
    address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
    location: {
      lat: 43.6425701,
      lng: -79.3896317,
    },
    creator: "wilson",
  },
  {
    id: "p2",
    title: "Centennial College",
    description: "One of the best college in GTA",
    imageUrl: "https://i.imgur.com/CzXTtJV.jpg",
    address: "941 Progress Ave, Scarborough, ON M1G 3T8",
    location: {
      lat: 43.6425701,
      lng: -79.3896317,
    },
    creator: "hamid",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
