import React from 'react';
import PropertyCarousel from './PropertyCarousel';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
const PropertyListing = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      name: 'Property 1',
      address: 'Address 1',
      price: '$300,000',
    },
    {
      id: 2,
      image: img2,
      name: 'Property 1',
      address: 'Address 1',
      price: '$300,000',
    },
    {
      id: 3,
      image: img3,
      name: 'Property 1',
      address: 'Address 1',
      price: '$300,000',
    },
    {
      id: 4,
      image: img4,
      name: 'Property 1',
      address: 'Address 1',
      price: '$300,000',
    },
    {
      id: 5,
      image: img5,
      name: 'Property 1',
      address: 'Address 1',
      price: '$300,000',
    },

  ];

  return (
    <div className="property-listing">
      <h2>Property Listings</h2>
      <PropertyCarousel properties={properties} />
    </div>
  );
};

export default PropertyListing;
