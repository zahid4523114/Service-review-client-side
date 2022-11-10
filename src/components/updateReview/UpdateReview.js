import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import swal from "sweetalert";

const UpdateReview = () => {
  const alertForUpdate = () => {
    swal("Good job!", "Review Update to database!", "success");
  };

  const updateData = useLoaderData();
  const { name, price, description, image, _id } = updateData;
  const { user } = useContext(AuthContext);

  const reviewUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    //reviewer data
    const reviewerData = {
      email: email,
      name: name,
      image: image,
      price: price,
      description: description,
    };
    //post to db
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewerData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alertForUpdate();
        }
      });
  };
  return (
    <form
      onSubmit={reviewUpdate}
      className="w-75 mx-auto my-5 shadow-lg p-3 rounded-5"
    >
      <h1 className="my-3 text-center">Update your Review</h1>
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
          defaultValue={name}
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
          Reviewer image
        </label>
        <input
          defaultValue={image}
          required
          type="text"
          placeholder="img url"
          name="image"
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
          defaultValue={price}
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
          defaultValue={description}
          name="description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary rounded-5">
        Update Review
      </button>
    </form>
  );
};

export default UpdateReview;
