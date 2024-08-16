import { Menu, Col, Row  } from "antd";
import { useState } from "react";
import "../style/homepage.css"

const items = [
  {
    label: "ASIA",
    key: "ASIA",
  },
  {
    label: "ASIA FX",
    key: "ASIA FX",
  },
  {
    label: "EUR",
    key: "EUR",
  },
  {
    label: "PRE-MKT",
    key: "PRE-MKT",
  },
];

const Homepage = () => {
  const [current, setCurrent] = useState("ASIA");
  const [list, setList] = useState([
    { name: 'DRX', index: 17726.47,  label: 'ASIA'},
    { name: 'DRX', index: 17726.47,  label: 'ASIA FX'},
    { name: 'DRX', index: 17726.47, label: 'ASIA' },
    { name: 'DRX', index: 17726.47, label: 'EUR'},
    { name: 'DRX', index: 17726.47, label: 'PRE-MKT'},
  ])
  const menuClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={menuClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Row gutter={30} style={{ marginTop: '10px' }}>
        <Col className="gutter-row" span={4}>
          <div className="card">
            <div>
              <span className="float-left">ASX 200*</span>
              <span className="float-right">7,828.80</span>
            </div>
            <div className="clear-float"></div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
