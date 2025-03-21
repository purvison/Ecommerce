import React, { useState, useEffect } from "react";
import Brands from "./Brands";
import "./ShoeList.css";

function ShoeList() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedBrand) {
      setShoes([]);
      return;
    }

    setLoading(true);
    fetch(`https://ecommerce-1-pq3f.onrender.com/shoes?brand=${selectedBrand}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch shoes");
        return res.json();
      })
      .then((data) => {
        setShoes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shoes:", err);
        setError("Failed to load shoes. Try again later.");
        setLoading(false);
      });
  }, [selectedBrand]);

  return (
    <div className="shoe-list-container">
      <Brands onBrandSelect={setSelectedBrand} />

      <div className="shoe-cards">
        {loading && <p>Loading shoes...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && shoes.length === 0 && selectedBrand && (
          <p>No shoes available for {selectedBrand}</p>
        )}
        {!loading && !selectedBrand && (
          <p>Please select a brand to see shoes.</p>
        )}

        {!loading &&
          shoes.map((shoe) => (
            <div key={shoe.id} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              <h2>{shoe.name}</h2>
              <h2>{shoe.brand}</h2>
              <p>💲 {shoe.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShoeList;
