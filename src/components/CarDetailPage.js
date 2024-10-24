import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CarDetailPage.css';

const CarDetailPage = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(0);

  const carData = {
    id: id,
    title: '2005 BMW M3 Convertible',
    price: 39995,
    description: '26,400 Miles, 6-Speed Manual Conversion, Hardtop Included, Unmodified',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    ],
    details: {
      make: 'BMW',
      model: 'E46 M3',
      engine: '3.2L I6',
      drivetrain: 'Rear-wheel drive',
      mileage: '26,400',
      transmission: 'Manual (6-Speed)',
      vin: 'WBSBR93445PK09948',
      bodyStyle: 'Convertible',
      titleStatus: 'Clean (MD)',
      exteriorColor: 'Mystic Blue Metallic',
      location: 'Las Vegas, NV 89107',
      interiorColor: 'Black',
      seller: '3pedal',
      sellerType: 'Dealer',
    },
    dealerDescription: "The E46 BMW M3 is a crowd favorite here at Cars & Bids, thanks to its potent 354 6-cylinder engine, engaging driving dynamics, and handsome styling. This particular M3 Convertible is finished in gorgeous Mystic Blue Metallic, and it boasts low mileage, with just 26,400 miles on the odometer. It also features a 6-speed manual transmission swap and some great factory equipment like a power-operated convertible top, Nappa leather upholstery, and the uncommon factory hardtop. Plus, this M3 is unmodified outside of that 6-speed manual swap, and it comes with a clean, accident-free Carfax report for added peace of mind.",
    highlights: [
      'This is a 2005 BMW M3 Convertible, finished in Mystic Blue Metallic with a black soft top and a black interior.',
      'The odometer on this M3 currently displays approximately 26,400 miles.',
      'The attached Carfax history report contains a gap from 2009 to 2015, though it lists no accidents or mileage discrepancies for the given time period.',
      'Factory equipment includes xenon headlights, 19-inch alloy wheels, power-adjustable front seats with driver\'s memory, and automatic climate control.',
      'This M3 has been fitted with a 6-speed manual transmission, replacing the original SMG unit.',
      'The factory hardtop is included with the sale.',
      'Recent maintenance includes an oil change and new tires.',
    ],
    equipment: [
      'Cold Weather Package (heated front seats, headlight washers, ski bag)',
      '19-inch Style 67 wheels',
      'Dynamic Stability Control (DSC)',
      'Xenon headlights',
      'Fog lights',
      'Power-retractable soft top',
      'Nappa leather upholstery',
      'Power-adjustable front sport seats',
      'Aluminum pedals',
      'Automatic climate control',
    ],
    modifications: [
      '6-speed manual transmission swap (replaced original SMG unit)',
      'No other modifications reported',
    ],
    knownFlaws: [
      'Minor stone chips on front bumper and hood',
      'Small scratch on driver\'s side door (see photos)',
      'Slight wear on driver\'s seat bolster',
    ],
    serviceHistory: [
      'Oil change performed at 26,000 miles (May 2023)',
      'New set of Michelin Pilot Sport 4S tires installed at 25,800 miles (April 2023)',
      'Brake fluid flush at 25,500 miles (March 2023)',
      'Annual inspection completed (March 2023)',
    ],
    otherItems: [
      'Owner\'s manual',
      'Two sets of keys',
      'Factory hardtop with stand',
      'BMW-branded car cover',
      'Original SMG transmission (removed during manual conversion)',
    ],
    ownershipHistory: [
      'First owner: 2005 - 2009 (Maryland)',
      'Second owner: 2009 - 2015 (California)',
      'Third owner: 2015 - 2022 (Nevada)',
      'Current dealer: Acquired in 2022',
    ],
    sellerNotes: 'This E46 M3 Convertible represents a rare opportunity to own a low-mileage example with the desirable 6-speed manual conversion. The car has been well-maintained throughout its life, and the recent service ensures it\'s ready for its next owner. The included factory hardtop adds versatility, making this M3 an excellent choice for year-round enjoyment. As always, we encourage interested buyers to inspect the vehicle in person or have it professionally inspected before purchase.',
    videos: [
      { thumbnail: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Exterior Walk-around' },
      { thumbnail: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Interior Tour' },
      { thumbnail: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', title: 'Driving Footage' },
    ],
    suggestedCars: [
      { image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=268&h=179&q=80', title: '2006 BMW M3 Coupe', description: '45,000 miles - $34,995' },
      { image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=268&h=179&q=80', title: '2004 BMW Z4 3.0i Roadster', description: '38,500 miles - $18,995' },
      { image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=268&h=179&q=80', title: '2007 Porsche 911 Carrera S Cabriolet', description: '32,000 miles - $49,995' },
    ],
  };

  return (
    <div className="car-detail-page">
      <main className="main-content">
        <div className="car-details-container">
          <div className="car-details-left">
            <div className="car-images">
              <div className="main-image-container">
                <img src={carData.images[mainImage]} alt={carData.title} className="main-image" />
              </div>
              <div className="thumbnail-container">
                {carData.images.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt={`${carData.title} - View ${index + 1}`} 
                    className={`thumbnail ${index === mainImage ? 'active' : ''}`}
                    onClick={() => setMainImage(index)}
                  />
                ))}
              </div>
            </div>

            <div className="car-info">
              <h1 className="car-title">{carData.title}</h1>
              <p className="car-description">{carData.description}</p>
              <div className="car-price">Price: ${carData.price.toLocaleString()}</div>

              <div className="car-details-table">
                <table>
                  <tbody>
                    <tr>
                      <td>Make</td>
                      <td>{carData.details.make}</td>
                      <td>Engine</td>
                      <td>{carData.details.engine}</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td>{carData.details.model}</td>
                      <td>Drivetrain</td>
                      <td>{carData.details.drivetrain}</td>
                    </tr>
                    <tr>
                      <td>Mileage</td>
                      <td>{carData.details.mileage}</td>
                      <td>Transmission</td>
                      <td>{carData.details.transmission}</td>
                    </tr>
                    <tr>
                      <td>VIN</td>
                      <td>{carData.details.vin}</td>
                      <td>Body Style</td>
                      <td>{carData.details.bodyStyle}</td>
                    </tr>
                    <tr>
                      <td>Title Status</td>
                      <td>{carData.details.titleStatus}</td>
                      <td>Exterior Color</td>
                      <td>{carData.details.exteriorColor}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{carData.details.location}</td>
                      <td>Interior Color</td>
                      <td>{carData.details.interiorColor}</td>
                    </tr>
                    <tr>
                      <td>Seller</td>
                      <td>{carData.details.seller}</td>
                      <td>Seller Type</td>
                      <td>{carData.details.sellerType}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="car-description">
                <h2>Dealer's Description</h2>
                <p>{carData.dealerDescription}</p>
              </div>

              <div className="car-highlights">
                <h2>Highlights</h2>
                <ul>
                  {carData.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="car-equipment">
                <h2>Equipment</h2>
                <ul>
                  {carData.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modifications">
                <h2>Modifications</h2>
                <ul>
                  {carData.modifications.map((mod, index) => (
                    <li key={index}>{mod}</li>
                  ))}
                </ul>
              </div>

              <div className="known-flaws">
                <h2>Known Flaws</h2>
                <ul>
                  {carData.knownFlaws.map((flaw, index) => (
                    <li key={index}>{flaw}</li>
                  ))}
                </ul>
              </div>

              <div className="service-history">
                <h2>Recent Service History</h2>
                <ul>
                  {carData.serviceHistory.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="other-items">
                <h2>Other Items Included</h2>
                <ul>
                  {carData.otherItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ownership-history">
                <h2>Ownership History</h2>
                <ul>
                  {carData.ownershipHistory.map((history, index) => (
                    <li key={index}>{history}</li>
                  ))}
                </ul>
              </div>

              <div className="seller-notes">
                <h2>Seller Notes</h2>
                <p>{carData.sellerNotes}</p>
              </div>

              <div className="car-videos">
                <h2>Videos</h2>
                <div className="video-gallery">
                  {carData.videos.map((video, index) => (
                    <div key={index} className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-button"></div>
                      <p>{video.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="car-details-right">
            <div className="contact-dealer">
              <h2>Contact Dealer</h2>
              <button className="contact-button">Send Message</button>
            </div>
            <div className="suggested-cars">
              <h2>You May Also Like</h2>
              {carData.suggestedCars.map((car, index) => (
                <div key={index} className="suggested-car">
                  <img src={car.image} alt={car.title} className="suggested-car-image" />
                  <h3>{car.title}</h3>
                  <p>{car.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetailPage;