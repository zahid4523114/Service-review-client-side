import React from "react";
import "./Services.css";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const servicesData = useLoaderData();
  return (
    <div className="services-container my-5">
      {servicesData.map((service) => (
        <div key={service._id} class="card" style={{ width: "18rem" }}>
          <img src={service.serviceThumb} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">{service.serviceTitle}</h5>
            <p class="card-text">
              {service.serviceDes.length > 100
                ? service.serviceDes.slice(0, 50) + "....See more"
                : service.serviceDes}
            </p>
            <p>Price: ${service.servicePrice}</p>
          </div>
          <button className="btn btn-primary">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Services;
