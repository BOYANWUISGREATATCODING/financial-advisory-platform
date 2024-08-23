import React, { useState } from 'react';
import './SideNews.css';

const SideNews = ({ news = [] }) => {
  function generateNewsList () {
    return news.map((item, index) => {
      return (
        <div className="side-news-item" key={index}>
          <div className="side-news-time">{item.date_time}</div>
          <div className="side-news-title">{item.content}</div>
        </div>
      )
    })
  }
  return (
    <div className="side-news">
      {generateNewsList()}
    </div>
  );
};

export default SideNews;

