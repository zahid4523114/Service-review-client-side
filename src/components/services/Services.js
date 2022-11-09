import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import UseTitle from "../useTitle/UseTitle";

const Services = () => {
  const servicesData = useLoaderData();
  UseTitle("Services");
  return (
    <div className="services-container my-5">
      <PhotoProvider>
        {servicesData.map((service) => (
          <div key={service._id} class="card" style={{ width: "18rem" }}>
            <PhotoView src={service.serviceThumb}>
              <img src={service.serviceThumb} class="card-img-top" alt="..." />
            </PhotoView>

            <div class="card-body">
              <h5 className="card-title">{service.serviceTitle}</h5>
              <p class="card-text">
                {service.serviceDes.length > 100
                  ? service.serviceDes.slice(0, 50) + "....See more"
                  : service.serviceDes}
              </p>
              <p>Price: ${service.servicePrice}</p>
            </div>
            <Link to={`/service/${service._id}`}>
              <button className="btn btn-primary container-fluid">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default Services;
