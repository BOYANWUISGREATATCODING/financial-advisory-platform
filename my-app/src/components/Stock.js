import { Menu, Col, Row } from "antd";
import { useState } from "react";

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

function Stock() {
  const [current, setCurrent] = useState("ASIA");
  const [list, setList] = useState([
    { name: "DRX", index: 17726.47, label: "ASIA", percentage: 5 },
    { name: "DRX", index: 17726.47, label: "ASIA FX", percentage: 5 },
    { name: "DRX", index: 17726.47, label: "ASIA", percentage: 5 },
    { name: "DRX", index: 17726.47, label: "EUR", percentage: -5 },
    { name: "DRX", index: 17726.47, label: "PRE-MKT", percentage: 5 },
  ]);
  const menuClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="p-[20px]">
      <Menu
        onClick={menuClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Row gutter={30} className="mt-4">
        {list.map((item) => (
          <Col span={4}>
            <div className="bg-green-700 text-white rounded h-[100px] font-bold p-2">
              <div className="clearfix">
                <span className="float-left">ASX 200*</span>
                <span className="float-right">7,828.80</span>
              </div>
              <div className="clearfix">
                <span className="float-right">{ item.percentage }% </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Stock;
