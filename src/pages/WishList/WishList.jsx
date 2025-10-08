import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../components/Utilities/Utilities";
import Book from "../Book/Book";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
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

  return (
    <div className="max-w-6xl m-auto my-9">
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
