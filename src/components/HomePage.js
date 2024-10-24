import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const carModels = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Hatchback', 'Van'];
  
  const cars = [
    {
      id: 1,
      title: '2020 Mercedes-Benz C-Class',
      price: 39995,
      details: '25,000 miles • Automatic • Leather Interior',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: '2021 BMW 3 Series',
      price: 42500,
      details: '18,500 miles • Automatic • Sport Package',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      title: '2019 Audi Q5',
      price: 37995,
      details: '32,000 miles • AWD • Panoramic Roof',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: '2022 Lexus RX',
      price: 48900,
      details: '12,000 miles • Hybrid • Premium Package',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: '2021 Tesla Model 3',
      price: 45000,
      details: '15,000 miles • Electric • Autopilot',
      image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: '2020 Ford Mustang',
      price: 35000,
      details: '20,000 miles • Manual • V8 Engine',
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="featured-car">
          <img src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Featured Car" />
          <div className="featured-car-info">
            <h2>Find Your Dream Car Today</h2>
            <p>Browse our extensive inventory of quality pre-owned vehicles</p>
            <Link to="/inventory" className="button">View Inventory</Link>
          </div>
        </section>

        <section className="filters-section">
          <div className="filters-container">
            <div className="filter-options">
              <select className="filter-select">
                <option>Years</option>
              </select>
              <select className="filter-select">
                <option>Transmission</option>
              </select>
              <select className="filter-select">
                <option>Body Style</option>
              </select>
            </div>
            <div className="sort-options">
              <button className="sort-button">Newly listed</button>
              <button className="sort-button">Lowest mileage</button>
              <button className="sort-button">Closest to me</button>
            </div>
          </div>
          <div className="filter-buttons">
            {carModels.map((model, index) => (
              <button key={index} className="filter-button">{model}</button>
            ))}
          </div>
        </section>

        <h2>Featured Vehicles</h2>
        <div className="car-grid">
          {cars.map((car) => (
            <Link to={`/car/${car.id}`} key={car.id} className="car-item-link">
              <div className="car-item">
                <img src={car.image} alt={car.title} />
                <div className="car-info">
                  <div className="car-title">{car.title}</div>
                  <div className="car-price">${car.price.toLocaleString()}</div>
                  <div className="car-details">{car.details}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;