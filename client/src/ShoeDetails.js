import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShoeDetails = () => {
  const { id } = useParams(); // Get shoe ID from the URL
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    fetch(`https://ecommerce-1-pq3f.onrender.com/shoes${id}`)
      .then((response) => response.json())

      .then((data) => {
        const selectedShoe = data.find((item) => item.id === parseInt(id));
        setShoe(selectedShoe);
      })
      .catch((error) => console.error("Error fetching shoe details:", error));
  }, [id]);

  if (!shoe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{shoe.name}</h2>
      <img src={shoe.image} alt={shoe.name} />
      <p>Price: {shoe.price}</p>
      <p>Brand: {shoe.brand}</p>
    </div>
  );
};

export default ShoeDetails;
