import React from 'react';
import './SecondaryCardContainer.css';

const SecondaryCardContainer = () => {
    const secondaryNews = [
        {
            image: "https://via.placeholder.com/300x150",
            title: "Secondary Headline 1",
            link: "/link-to-article-1"
        },
        {
            image: "https://via.placeholder.com/300x150",
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
                    <li key={index} className="secondary-card">
                        <a href={news.link}>
                            <img src={news.image} alt={news.title} className="secondary-card-image" />
                            <div className="secondary-card-headline">
                                <h3>{news.title}</h3>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecondaryCardContainer;
