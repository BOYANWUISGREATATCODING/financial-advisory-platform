import React from 'react';
import './MainNews.css';

const MainNews = () => {
  return (
    <div className="main-news">
      <img src="https://via.placeholder.com/800x400" alt="Main headline" className="main-news-image" />
      <div className="main-news-title">
        Japan stocks lead gains in mixed Asia-Pacific markets with Nikkei up more than 2%
      </div>
      <div className="main-news-description">
        S&P 500, Nasdaq eke out small gains to hold last week’s momentum ahead of key inflation data
      </div>
    </div>
  );
};

export default MainNews;
