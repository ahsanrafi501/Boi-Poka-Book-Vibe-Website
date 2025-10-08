import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);
  const data = useLoaderData();
  // console.log(data)
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  console.log(tags)

  return (
    <div className="max-w-6xl m-auto sm:flex justify-center items-between">
      <div className="p-[74px] bg-[#1313130D] rounded-2xl my-8">
        <img className="max-h-[564px] max-w-[425px]" src={image} alt="book Cover Image" />
      </div>
     <div className="ml-12">
         <div className="border-b border-[#13131315] sm:mt-[100px]">
         <h2 className="text-[40px] font-bold">{bookName}</h2>
         <h4 className="text-[20px] font-medium text-[#13131380] mt-2">By: {author}</h4>
      </div>
      <div className="border-b border-[#13131315] mt-4">
        <p>{category}</p>
      </div>
      <div className="mt-4">
        <p><span className="text-[16px] font-bold">Review:</span><span className="text-[#13131370] ml-3">{review}</span></p>
      </div>

      <div className="mt-4 pb-[20px] border-b border-[#13131315]">
            <p><span className="font-bold">Tag:</span><span className="ml-2 text-[#23BE0A]">#{tags[0]}</span> <span className="text-[#23BE0A] ml-[30px]">#{tags[1]}</span></p>
      </div>


      <div className="flex gap-10">
        <div className="">
            <h1 className="text-[#13131370] text-[16px]">Number of Pages:</h1>
            <h1 className="text-[#13131370] text-[16px]">Publisher:</h1>
            <h1 className="text-[#13131370] text-[16px]">Year of Publishing:</h1>
            <h1 className="text-[#13131370] text-[16px]">Rating:</h1>
        </div>
        <div className="flex flex-col">
            <span className="text-[16px] font-semibold">{totalPages}</span>
          <span className="text-[16px] font-semibold">{publisher}</span>
             <span className="text-[16px] font-semibold">{yearOfPublishing}</span>
              <span className="text-[16px] font-semibold">{rating}</span>
        </div>
      </div>
      <div className="my-8">
        <button className="btn px-6 mr-2">Read</button>
        <button className="btn btn-accent ml-4">Wishlist</button>
      </div>

     </div>
    </div>
  );
};

export default BookDetails;
