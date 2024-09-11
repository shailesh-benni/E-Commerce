import React from 'react';

export default function Carasoul() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img 
              src="https://www.nestleprofessional.in/sites/default/files/2022-05/Chicken-Momos.jpg" 
              className="d-block w-100" 
              alt="Chicken Momos"
              style={{ objectFit: "cover", filter: "brightness(30%)" }}  // Use inline styles here
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" 
              className="d-block w-100" 
              alt="Burger" 
              style={{ objectFit: "cover", filter: "brightness(30%)" }}  // Use inline styles here
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" 
              className="d-block w-100" 
              alt="Burger" 
              style={{ objectFit: "cover", filter: "brightness(30%)" }}  // Use inline styles here
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
