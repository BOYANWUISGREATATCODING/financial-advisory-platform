import React from 'react';
import './SecondaryCardContainer.css';
import p4Image from './assets/p4.jpg'
import p1Image from './assets/p1.jpg'

const SecondaryCardContainer = () => {
  const secondaryNews = [
    {
      image: p4Image,
      title: "Secondary Headlines",
      link: "/link-to-article-1"
    },
    {
      image: p1Image,
      title: "Secondary Headline 2",
      link: "/link-to-article-2"
    },
    {
      image: "https://via.placeholder.com/300x150",
      title: "Secondary Headline 3",
      link: "/link-to-article-3"
    }
  ];

  return (
    <div className="secondary-card-container">
      <ul>
        {secondaryNews.map((news, index) => (
          <li key={index} className="secondary-card" style={{ background: `url(${news.image}) no-repeat center/cover` }}>
            <a href={news.link}>
              <h3 className="secondary-card-headline text-overflow" title={news.title}>{news.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryCardContainer;
