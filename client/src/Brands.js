import React, { useState } from "react";
import "./Brands.css";

function Brands({ onBrandSelect }) {
  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Under Armour",
  ];

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    onBrandSelect(brand); // Pass selected brand to parent component
  };

  return (
    <div className="brands-container">
      <label htmlFor="brand-select">Select a Brand:</label>
      <select
        id="brand-select"
        className="brand-dropdown"
        value={selectedBrand}
        onChange={handleBrandChange}
      >
        <option value="">-- Choose a Brand --</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      {selectedBrand && (
        <p className="selected-brand">You selected: {selectedBrand}</p>
      )}
    </div>
  );
}

export default Brands;
