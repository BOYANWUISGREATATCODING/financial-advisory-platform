import { Menu, Col, Row } from "antd";
import { useState, useEffect} from "react";

const items = [
  {
    label: "沪深",
    key: "沪深",
  },
  {
    label: "亚洲",
    key: "亚洲",
  },
  {
    label: "美股",
    key: "美股",
  },
];

function Stock() {
  const [current, setCurrent] = useState("沪深");
  const [list, setList] = useState([
    // {
    //   "name": "道琼斯工业指数",
    //   "ts_code": "DJI",
    //   "price": 41175.08,
    //   "change_rate": 1.14
    // },
  ]);
  const menuClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    let ignore = false;
    fetch(`http://127.0.0.1:8000/stock/${current}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      // console.log(res)
      if (data&& !ignore) {
        setList(data)
      }
    });
    return () => { ignore = true; }
  }, [current])

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
            <div className={`${item.change_rate< 0 ? 'bg-red-700' : 'bg-green-700'} text-white rounded h-[100px] font-bold p-2`}>
              <div className="clearfix">
              <span className="float-left">{item.name}</span>
              <span className="float-right">{item.ts_code}</span>
              </div>
              <div className="clearfix">
                <span className="float-right">{ item.change_rate }% </span>
                <span className="float-left">{item.price}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Stock;
