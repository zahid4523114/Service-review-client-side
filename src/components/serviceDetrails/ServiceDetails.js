import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const {
    serviceThumb,
    serviceDes,
    servicePrice,
    serviceRatings,
    serviceTitle,
  } = details;
  console.log(details);
  return (
    <div class="card mb-3 m-3" style={{ maxWidth: "540px;" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={serviceThumb} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{serviceTitle}</h4>
            <p class="card-text">{serviceDes}</p>
            <p class="card-text fw-bold">Price: ${servicePrice}</p>
            <p class="card-text fw-bold">Ratings: {serviceRatings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
