import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import UseTitle from "../useTitle/UseTitle";

const AddService = () => {
  UseTitle("Add Service");
  const alertForData = () => {
    swal("Good job!", "Service add to database!", "success");
  };
  const addService = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;

    const serviceData = {
      serviceTitle: title,
      serviceThumb: photo,
      servicePrice: price,
      serviceDes: description,
    };

    //post to db
    fetch(`https://b6-assignment-11-server.vercel.app/photographs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alertForData();
        }
        form.reset();
        console.log(data);
      });
  };
  return (
    <form onSubmit={addService} className="w-75 mx-auto my-5">
      <h1 className="my-3">Add your service</h1>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Photo url
        </label>
        <input
          required
          type="text"
          placeholder="url"
          name="photo"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Service Description
        </label>
        <input
          required
          type="text"
          placeholder="description"
          name="description"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Service title
        </label>
        <input
          required
          type="text"
          placeholder="title"
          name="title"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Service Price
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
      <button type="submit" class="btn btn-primary rounded-5">
        Add service
      </button>
    </form>
  );
};

export default AddService;
