import React, { useState, useEffect } from "react";
import "./home.css";

const Brands = ["Nike", "Adidas", "Puma"];

function Home() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedBrand) {
      setFilteredShoes([]);
      return;
    }

    setLoading(true);
    fetch(`https://ecommerce-1-pq3f.onrender.com/shoes/${selectedBrand}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch shoes data");
        return response.json();
      })
      .then((data) => {
        setFilteredShoes(data);
        setError("");
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shoes:", err);
        setError("Failed to load shoes data");
        setFilteredShoes([]);
        setLoading(false);
      });
  }, [selectedBrand]);

  return (
    <div className="home-container">
      <h2>Select a Brand</h2>
      <select onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">-- Choose a Brand --</option>
        {Brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading shoes...</p>}

      <div className="shoe-grid">
        {filteredShoes.map((shoe) => (
          <div
            key={shoe.id || shoe.name}
            className="shoe-card"
            onClick={() => setSelectedShoe(shoe)}
          >
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <div className="shoe-info">
              <p>{shoe.name}</p>
              <p>Price: {shoe.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedShoe && (
        <div className="modal" onClick={() => setSelectedShoe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedShoe(null)}>
              &times;
            </span>
            <h2>{selectedShoe.name}</h2>
            <img src={selectedShoe.image} alt={selectedShoe.name} />
            <p>Price: {selectedShoe.price}</p>
            <p>Brand: {selectedShoe.brand || "Unknown"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
