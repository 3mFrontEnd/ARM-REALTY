import React, { useState } from 'react';
import './PropertyCarousel.css'; // Import your CSS file

const PropertyCarousel = ({ properties }) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const prevProperty = () => {
    setCurrentPosition(currentPosition - 1);
  };

  const nextProperty = () => {
    if (currentPosition < properties.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  return (
    <div className="property-carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${currentPosition * 100}%)` }}>
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
            <p>{property.address}, {property.price}</p>
            <a href={`/property/${index + 1}`}>View Details</a>
          </div>
        ))}
      </div>
      <button className="carousel-prev-btn" onClick={prevProperty}>Previous</button>
      <button className="carousel-next-btn" onClick={nextProperty} disabled={currentPosition === properties.length - 1}>Next</button>
    </div>
  );
};

export default PropertyCarousel;
