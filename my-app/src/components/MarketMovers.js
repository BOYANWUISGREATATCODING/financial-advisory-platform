// import { Row, Col, Button, Modal } from "antd"
// import React, { useState } from 'react';
// import { PlusOutlined } from "@ant-design/icons";

// const MarketMovers = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//     <div className="p-5">
//         <div className="text-[#002f6c] font-bold text-3xl">市场</div>
//         <div className="mt-5 bg-[#cfd8e21a] p-5 border border-[#b9c7d5] border-dashed border-t-[#002f6c] border-t-solid border-t-4" style={{ borderTopStyle: 'solid'}}>
//            <div className="mt-5">
//                 <span className="text-[#002f6c] font-bold text-xl">大模型股价预测</span>
//            </div>


//         <Button type="primary" onClick={() => setOpen(true)}>
//         <PlusOutlined style={{ marginRight: "5px" }} />
//         </Button>
//         <Modal
//           title="Modal 1000px width"
//           centered
//           open={open}
//           onOk={() => setOpen(false)}
//           onCancel={() => setOpen(false)}
//           width={1000}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>

//            <Row gutter={20} className="mt-5">
//             <Col span={12}>
//                 <div className="text-lg font-bold"></div>
//                 <table className="w-full mt-5">
//                     <tr>
//                     <td>
//                     <PlusOutlined style={{ marginRight: "5px" }} />
//                     FPH-NZ
//                   </td>

//                         {/* <td>FPH-NZ</td> */}
//                         <td>Fisher & Paykel Healthcare Corporation Lts</td>
//                         <td>4.55%</td>
//                         <td className="w-[42%]">
//                             <div className="w-[50%] bg-green-800 h-[15px]"></div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>FPH-NZ</td>
//                         <td>Fisher & Paykel Healthcare Corporation Lts</td>
//                         <td>4.55%</td>
//                         <td className="w-[42%]">
//                             <div className="w-[50%] bg-green-800 h-[15px]"></div>
//                         </td>
//                     </tr>
//                 </table>
//             </Col>
//             <Col span={12}>
//                 <div className="text-lg font-bold"></div>
//                 <table className="w-full mt-5">
//                     <tr>
//                         <td>FPH-NZ</td>
//                         <td>Fisher & Paykel Healthcare Corporation Lts</td>
//                         <td>3.55%</td>
//                         <td className="w-[30%]">
//                             <div className="w-[50%] bg-red-800 h-[15px]"></div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>FPH-NZ</td>
//                         <td>Fisher & Paykel Healthcare Corporation Lts</td>
//                         <td>3.55%</td>
//                         <td className="w-[30%]">
//                             <div className="w-[50%] bg-red-800 h-[15px]"></div>
//                         </td>
//                     </tr>
//                 </table>
//             </Col>
//            </Row>
//         </div>
//     </div>
//     </>
//     );
// };

// export default MarketMovers



import { Row, Col, Button, Modal } from "antd";
import React, { useState } from 'react';
import { PlusOutlined } from "@ant-design/icons";

const MarketMovers = () => {
  const [open, setOpen] = useState(false);
  const [activeStock, setActiveStock] = useState(null);

  const handleOpenModal = (stock) => {
    setActiveStock(stock);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setActiveStock(null);
  };

  const stocks = [
    {
      code: "FPH-NZ",
      name: "Fisher & Paykel Healthcare Corporation Lts",
      change: "4.55%",
      color: "green-800",
      width: "50%"
    },
    {
      code: "FPH-NZ",
      name: "Fisher & Paykel Healthcare Corporation Lts",
      change: "3.55%",
      color: "red-800",
      width: "50%"
    }
  ];

  return (
    <>
      <div className="p-5">
        <div className="text-[#002f6c] font-bold text-3xl">市场</div>
        <div className="mt-5 bg-[#cfd8e21a] p-5 border border-[#b9c7d5] border-dashed border-t-[#002f6c] border-t-solid border-t-4" style={{ borderTopStyle: 'solid'}}>
          <div className="mt-5">
            <span className="text-[#002f6c] font-bold text-xl">大模型股价预测</span>
          </div>

          <Row gutter={20} className="mt-5">
            {stocks.map((stock, index) => (
              <Col span={12} key={index}>
                <table className="w-full mt-5">
                  <tr>
                    <td>
                      <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => handleOpenModal(stock)}
                        style={{ marginRight: "5px" }}
                      />
                      {stock.code}
                    </td>
                    <td>{stock.name}</td>
                    <td>{stock.change}</td>
                    <td className="w-[42%]">
                      <div className={`w-[50%] bg-${stock.color} h-[15px]`} style={{ width: stock.width }}></div>
                    </td>
                  </tr>
                </table>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Modal
        title={`Details for ${activeStock ? activeStock.code : ""}`}
        centered
        open={open}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        width={1000}
      >
        <p>Details for {activeStock ? activeStock.name : ""}.</p>
        <p>Some additional information can go here...</p>
        <p>Further contents...</p>
      </Modal>
    </>
  );
};

export default MarketMovers;
