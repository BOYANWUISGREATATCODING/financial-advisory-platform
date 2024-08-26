import React from 'react';
import './FeaturedCard.css';
// import './financial_server/news/src/p5.jpg';

const FeaturedCard = () => {

  return (
    <div className="featured-card">
      <a href="/some-article-link">
        <div className='main-news'>
          <div className="featured-card-content">
            <h2 className="featured-card-title">中金：发展液氢储运可能是中期较为现实的运氢降本路径</h2>
            <p className="featured-card-description">中金公司研报认为，随着现有绿氢规划产能的投放，绿氢的储运问题将逐渐成为困扰行业的重要瓶颈，并由此带来氢储运产业链机遇。相比管道和气态运氢等方式，发展液氢储运可能是中期较为现实的运氢降本路径，发展潜力可能被低估。 预计到2030年国内液氢产能有望达到37万吨/年，液氢储运设备的市场规模有望达到80亿元以上</p>
          </div>
        </div>
        {/* <img src="https://via.placeholder.com/800x400" alt="Main headline" className="featured-card-image" /> */}
      </a>

    </div>
  );
};

export default FeaturedCard;
