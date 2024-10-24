import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryPage.css';

const InventoryPage = () => {
  const carModels = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Hatchback', 'Van'];
  
  const cars = [
    {
      id: 1,
      title: '2020 Toyota Camry',
      price: 25995,
      details: '30,000 miles • Automatic • Leather Interior',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: '2021 Honda Civic',
      price: 22500,
      details: '15,000 miles • Automatic • Sport Package',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '2019 Ford F-150',
      price: 35995,
      details: '40,000 miles • Automatic • 4WD',
      image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: '2022 Chevrolet Malibu',
      price: 27900,
      details: '5,000 miles • Automatic • Premium Package',
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: '2020 Nissan Altima',
      price: 23000,
      details: '20,000 miles • CVT • SV Trim',
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: '2021 BMW 3 Series',
      price: 41000,
      details: '10,000 miles • Automatic • M Sport Package',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="inventory-page">
      <main className="inventory-content">
        <h1>Car Inventory</h1>
        
        <div className="filters-container">
          <div className="filter-buttons">
            {carModels.map((model, index) => (
              <button key={index} className="filter-button">{model}</button>
            ))}
          </div>
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
            <button className="save-search-button">Save Search</button>
          </div>
        </div>

        <h2>Available Cars</h2>
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

export default InventoryPage;