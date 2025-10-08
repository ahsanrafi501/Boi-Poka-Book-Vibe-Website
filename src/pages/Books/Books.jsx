// import React, { useEffect, useState } from 'react';

import { Suspense } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {

    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // },[])


    return (
       <div className="max-w-6xl m-auto">
            <h2 className="font-bold text-3xl text-center">Books</h2>
            <Suspense fallback={<span>Loading...</span>}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book> )
                    }
                </div>
            </Suspense>
       </div>
    );
};

export default Books;