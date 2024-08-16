import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('');
  const [showFocusWindow, setShowFocusWindow] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  useEffect(() => {
    // Simulate fetching news data from an API
    setNews([
      { time: '21:16:20', headline: '财政策：实施支持科技创新专项担保计划。', url: '#' },
      { time: '21:15:27', headline: '贝克休斯油服：目前看来，美国石油在下半年2024年复苏的可能性现在不大。', url: '#' },
      { time: '21:14:21', headline: '芬兰方面表示俄罗斯船只侵犯了其领土完整。', url: '#' },
      { time: '21:12:26', headline: '订单流5分钟图显示，21:12纯碱主力合约价格在空头堆积带下方波动，现报1821元/吨，跌幅2.57%。', url: '#' },
      { time: '21:09:55', headline: '大摩：数据已经趋向于美联储所希望的方向。', url: '#' },
    ]);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFocusWindowToggle = () => {
    setShowFocusWindow(!showFocusWindow);
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopics((prevTopics) =>
      prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic]
    );
  };

  const handleApply = () => {
    setShowFocusWindow(false);
  };

  return (
    <div className="home">
      <h1>Financial Advisory Platform</h1>
      <div className="header">
        <div className="date-filter">
          <span>{new Date().toLocaleDateString()}</span>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All News</option>
            <option value="policy">Policy</option>
            <option value="oil">Oil</option>
            <option value="international">International</option>
            <option value="market">Market</option>
          </select>
        </div>
      </div>
      <div className="news-list">
        {news
          .filter((item) => !filter || item.headline.includes(filter))
          .map((item, idx) => (
            <div key={idx} className="news-item">
              <div className="news-time">{item.time}</div>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-headline">
                {item.headline}
              </a>
            </div>
          ))}
      </div>
      <div className="toolbar">
        <button onClick={handleFocusWindowToggle}>Clustering</button>
      </div>
      {showFocusWindow && (
        <div className="focus-window">
          <h2>Select Topics</h2>
          <div className="topics">
            <h3>By Financial Product Type</h3>
            {['Precious Metals', 'Oil', 'Foreign Exchange'].map((topic) => (
              <div key={topic} className="topic">
                <input
                  type="checkbox"
                  id={topic}
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicSelection(topic)}
                />
                <label htmlFor={topic}>{topic}</label>
              </div>
            ))}
            <h3>By Sector</h3>
            {['Home Appliances', 'Aerospace', 'Technology'].map((topic) => (
              <div key={topic} className="topic">
                <input
                  type="checkbox"
                  id={topic}
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicSelection(topic)}
                />
                <label htmlFor={topic}>{topic}</label>
              </div>
            ))}
            <h3>By Stock</h3>
            {['Big A', 'U.S. Stocks'].map((topic) => (
              <div key={topic} className="topic">
                <input
                  type="checkbox"
                  id={topic}
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicSelection(topic)}
                />
                <label htmlFor={topic}>{topic}</label>
              </div>
            ))}
            <h3>By Time</h3>
            {['Latest News', 'Historical Data'].map((topic) => (
              <div key={topic} className="topic">
                <input
                  type="checkbox"
                  id={topic}
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicSelection(topic)}
                />
                <label htmlFor={topic}>{topic}</label>
              </div>
            ))}
          </div>
          <button onClick={handleApply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default Home;
