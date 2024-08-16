import React from 'react';
import './FeaturedCard.css';

const FeaturedCard = () => {
    return (
        <div className="featured-card">
            <a href="/some-article-link">
                <img src="https://via.placeholder.com/800x400" alt="Main headline" className="featured-card-image" />
            </a>
            <div className="featured-card-content">
                <h2 className="featured-card-title">Main Headline Title</h2>
                <p className="featured-card-description">This is a brief description of the main headline.</p>
            </div>
        </div>
    );
};

export default FeaturedCard;
