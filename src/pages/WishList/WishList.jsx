import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../components/Utilities/Utilities";
import Book from "../Book/Book";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const wishData = getStoredBook();
    const convertedData = wishData.map((id) => parseInt(id));
    const filterdData = data.filter((singleBook) =>
      convertedData.includes(singleBook.bookId)
    );
    setWishList(filterdData);
  }, [data]);

  const handleSort = type => {
    setSort(type);

    if(type === 'Year'){
        const sortedByPage = [...wishList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setWishList(sortedByPage);
    }
    if(type === 'Ratings'){
        const sortedByPage = [...wishList].sort((a, b) => a.rating - b.rating);
        setWishList(sortedByPage);
    }
  }
  
  return (
    <div className="max-w-6xl m-auto my-9">
      <details className="dropdown">
        <summary className="btn m-1">Sort by: {sort?sort:''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Year")}>Year</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>This is Mark as read List</h2>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {wishList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WishList;
