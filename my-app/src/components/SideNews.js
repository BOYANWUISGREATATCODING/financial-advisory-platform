import React from 'react';
import './SideNews.css';

const SideNews = () => {
  return (
    <div className="side-news">
      <div className="side-news-item">
        <div className="side-news-time">3 hours ago</div>
        <div className="side-news-title">CNBC Daily Open: Oil soars on Middle-East tensions</div>
      </div>
      <div className="side-news-item">
        <div className="side-news-time">3 hours ago</div>
        <div className="side-news-title">Elon Musk, Donald Trump event on X crashes site, Tesla CEO blames cyberattack</div>
      </div>
      <div className="side-news-item">
        <div className="side-news-time">4 hours ago</div>
        <div className="side-news-title">Japan stocks lead gains in mixed Asia-Pacific markets with Nikkei up more than 2%</div>
      </div>
      <div className="side-news-item">
        <div className="side-news-time">4 hours ago</div>
        <div className="side-news-title">Tuesday’s big stock stories: What’s likely to move the market in the next trading session</div>
      </div>
      <div className="side-news-item">
        <div className="side-news-time">4 hours ago</div>
        <div className="side-news-title">Podcast: Japan’s quest for the most powerful microchip leads semiconductor revival</div>
      </div>
    </div>
  );
};

export default SideNews;
