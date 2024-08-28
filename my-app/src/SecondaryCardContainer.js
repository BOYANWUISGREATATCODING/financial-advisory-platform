import React from 'react';
import './SecondaryCardContainer.css';
import p4Image from './assets/p4.jpg'
import image from './assets/image.jpg'
import p2Image from './assets/p2.jpg'
import rmb from './assets/rmb.jpg'

const SecondaryCardContainer = () => {
  const secondaryNews = [
    {
      image: image,
      title: "耶伦与何立峰结束“广泛而富有成果”的会晤，美中宣布两项新的合作倡议",
      link: "https://www.voachinese.com/a/statement-from-secretary-of-treasury-janet-yellen-20240406/7559390.html"
    },
    {
      image: p4Image,
      title: "中信建投：当前A股基本面仍在筑底阶段 建议继续维持中等仓位耐心等待",
      link: "https://finance.sina.cn/7x24/2024-08-27/detail-inckzssp7511764.d.html?vt=4&cid=76524&node_id=76524&autocallup=no&isfromsina=no"
    },
    {
      image: rmb,
      title: "美元微笑理论”创立者：美国降息或引发1万亿美元中国资金回流，推动人民币升值10%",
      link: "https://finance.sina.cn/usstock/mggd/2024-08-27/detail-inckzssr4294673.d.html?vt=4&cid=76556&node_id=76556&autocallup=no&isfromsina=no"
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
