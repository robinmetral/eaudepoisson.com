import React from "react";

const PlacesList = ({ places }) => (
  <ul>
    {places.map((place, index) => (
      <li key={index}>
        <div>
          <strong>{place.name}</strong> – <em>{place.address}</em>
          <br />
          {place.description}
        </div>
      </li>
    ))}
  </ul>
);

export default PlacesList;
