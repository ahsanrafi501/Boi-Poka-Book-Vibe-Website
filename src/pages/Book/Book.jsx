import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(singleBook);

  const { bookName, bookId, author, tags, category, image, rating } = singleBook;

  return (
    <Link to={`/bookdetails/${bookId}`}><div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="py-8 px-24 bg-[#F3F3F3] rounded-2xl">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <div className="bg-[#23BE0A5]">
            <p className="text-[#23BE0A]">{tags[0]}</p>
          </div>
          <div className="bg-[#23BE0A5]">
            <p className="text-[#23BE0A]">{tags[1]}</p>
          </div>
        </div>
        <div>
          <h2 className="card-title"> {bookName} </h2>
        </div>
        <div>
          <p>By: {author}</p>
        </div>

        <div className="flex justify-between">
            <div>
                <p>{category}</p>
            </div>
            <div>
                <p>{rating}</p>
            </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Book;
