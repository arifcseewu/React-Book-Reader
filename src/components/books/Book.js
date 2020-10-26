import React, { useState } from "react";

import BookImage from "./bookImage.jpg";

const Book = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const { id, title, email, author, phone, description } = book;
  return (
    <div className="col">
      <div className="card h-100 w-100">
        <div className="card-body">
          <img src={BookImage} className="" alt="Harry Potter Image" />
          <h5>{id}</h5>
          <h5 className="card-title m-0">{title}</h5>
          <p className="lead text-muted">{author}</p>
          <p className="card-text">{description}</p>

          <button
            onClick={() => setShowMore(!showMore)}
            type="button"
            className="btn btn-info btn-sm"
          >
            <i className="fas fa-eye" /> read more
          </button>

          {showMore && (
            <div className="mt-2">
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Email:</b>
                  {email}
                </li>
                <li className="list-group-item">
                  <b>Phone:</b>
                  {phone}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
