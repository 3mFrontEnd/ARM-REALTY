import React from 'react';
import './ClientTestimonials.css'; 
import client1Image from '../assets/c1.jpg';
import client2Image from '../assets/c2.jpg';
import client3Image from '../assets/c3.jpg';
import client4Image from '../assets/c4.jpg';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante quis justo ultrices bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: client1Image,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content:
        'Vivamus eget neque vel nisi malesuada pharetra. Aliquam in efficitur velit. Nulla facilisi. Nullam auctor, felis eget hendrerit feugiat, libero quam euismod libero, a finibus metus eros a libero.',
      image: client2Image,
    },
    {
      id: 1,
      author: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante quis justo ultrices bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: client3Image,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content:
        'Vivamus eget neque vel nisi malesuada pharetra. Aliquam in efficitur velit. Nulla facilisi. Nullam auctor, felis eget hendrerit feugiat, libero quam euismod libero, a finibus metus eros a libero.',
      image: client4Image,
    },

  ];

  return (
    <div className="client-testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.author} />
            </div>
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
