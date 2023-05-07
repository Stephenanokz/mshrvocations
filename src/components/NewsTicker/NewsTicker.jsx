import React, { useState, useEffect } from "react";
import "./NewsTicker.scss";

const NewsTicker = ({ news }) => {
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => {
    // Set the initial ticker items
    setTickerItems(news);

    // Set up the ticker interval to scroll through the news items
    // const tickerInterval = setInterval(() => {
    //   setTickerItems((prevItems) => {
    //     const nextItemIndex = prevItems.length % news.length;
    //     const nextItem = news[nextItemIndex];
    //     return [...prevItems.slice(1), nextItem];
    //   });
    // }, 20000);

    // Clean up the ticker interval on unmount
    // return () => clearInterval(tickerInterval);
  }, [news]);

  return (
    <div className="news-ticker">
      <div className="news-ticker__container">
        <div className="news-ticker__items">
          {tickerItems.map((item, index) => (
            <div key={index} className="news-ticker__item">
              "{item.text} "
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
