import React, { useState } from "react";
import TextInputGroup from "../layout/TextInputGroup";

const AddBooks = () => {
  const [book, setBook] = useState({
    name: "",
    email: "",
    author: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState([]);

  const { name, email, author, phone, description } = book;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      return setErrors({ name: "Name is required" });
    }
    if (email === "") {
      return setErrors({ email: "Email is required" });
    }
    if (author === "") {
      return setErrors({ author: "Author is required" });
    }
    if (phone === "") {
      return setErrors({ phone: "Phone is required" });
    }
    if (description === "") {
      return setErrors({ description: "Description is required" });
    }

    const newBook = {
      name,
      email,
      phone,
    };
    setBook = {
      name: "",
      email: "",
      author: "",
      phone: "",
      description: "",
    };
    setErrors({});

    //props.history.push("/");
  };

  const onChnageHandler = (e) => {
    const { name, value } = e.target;

    setBook({ ...book, [name]: value });
  };
  return (
    <div className="card my-3">
      <div className="card-header">Add Book</div>
      <div className="card-body">
        <form onSubmit={onSubmitHandler}>
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={onChnageHandler}
            error={errors.name}
          />

          <TextInputGroup
            label="Author"
            name="author"
            placeholder="Enter Author"
            value={author}
            onChange={onChnageHandler}
            error={errors.author}
          />

          <TextInputGroup
            label="Email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={onChnageHandler}
            error={errors.email}
          />

          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={onChnageHandler}
            error={errors.phone}
          />

          <TextInputGroup
            label="Description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={onChnageHandler}
            error={errors.description}
          />
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onSubmit={onSubmitHandler}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
