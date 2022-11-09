import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import UseTitle from "../useTitle/UseTitle";
import swal from "sweetalert";

const ServiceDetails = () => {
  const alertForData = () => {
    swal("Good job!", "Review add to database!", "success");
  };
  UseTitle("Service Details");
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  console.log(details);
  const {
    serviceThumb,
    serviceDes,
    servicePrice,
    serviceRatings,
    serviceTitle,
  } = details;
  //   console.log(details);
  //reviews items
  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const id = details._id;
    // console.log(email, name, price, description, id);
    //reviewer data
    const reviewerData = {
      email: email,
      name: name,
      price: price,
      description: description,
      id: id,
    };
    //post to db
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewerData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alertForData();
          form.reset();
        } else {
          console.log(data);
        }
      });
  };
  return (
    <section>
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
      {/* add review section */}
      {user || user?.email ? (
        <form
          onSubmit={addReview}
          className="w-75 mx-auto my-5 shadow-lg p-3 rounded-5"
        >
          <h1 className="my-3 text-center">Add your Review</h1>
          <div className="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              defaultValue={user?.email}
              readOnly
              required
              type="email"
              placeholder="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">
              Reviewer name
            </label>
            <input
              required
              type="text"
              placeholder="name"
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">
              Recommend Service Price
            </label>
            <input
              required
              type="number"
              placeholder="price"
              name="price"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Add description about this service
            </label>
            <textarea
              name="description"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary rounded-5">
            Add Review
          </button>
        </form>
      ) : (
        <div className="text-center my-5">
          <h1 className=" text-danger">Please login to add a review!</h1>
          <Link to="/logIn">
            <button className="btn btn-primary px-5 rounded-5">Log In</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServiceDetails;
