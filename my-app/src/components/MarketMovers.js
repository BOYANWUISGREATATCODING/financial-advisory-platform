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
      code: "AAPL",
      name: "Apple",
      change: "+4.55%",
      color: "green-800",
      width: "45%",
      modalContent: (
        <>
          <p>苹果手机 {activeStock?.name}.</p>
          <p>【关键词】: iPhone 16, Apple Watch 10, 智能戒指专利, 可折叠屏MacBook, 欧盟监管, 印度制造, 市场份额, 高层变动</p>
          <p>  【积极因素】:
                1. 新产品预热：随着9月21日苹果秋季新品发布会的临近，市场对iPhone 16、Apple Watch 10及其他潜在新品如智能戒指和可折叠屏MacBook的期待情绪高涨，有望提振股价。
                2. 技术专利布局：苹果曝光的智能戒指专利和对未来折叠屏MacBook的计划，展示了公司在可穿戴设备和便携式计算领域的创新实力，可能吸引投资者关注。
                3. 市场调整策略：苹果对iOS和iPadOS的调整，允许用户删除大多数默认应用，反映了公司对用户需求的响应和灵活性，有助于提升品牌形象和用户满意度。
                4. 监管压力缓解：英国市场监管机构暂停对苹果应用商店的调查，等待新法律出台，减少了近期的法规不确定性，可能对股价形成正面支撑。
          </p>
          <p>【潜在担忧】:
                1. 欧盟监管应对：苹果在欧盟面临的监管压力要求其开放生态系统，可能影响其商业模式和收入结构，引发市场对长期盈利能力的担忧。
                2. 印度制造挑战：尽管鸿海董事长回应了印度iPhone制造良率的问题，但市场仍可能对供应链稳定性和成本控制保持警惕。
                3. 市场份额下滑：苹果在韩国市场份额的连续下滑和取消iPhone Plus机型的消息，提示了产品线调整的风险，以及在特定市场的竞争力减弱。
                4. 高层变动影响：App Store副总裁的离职和团队重组，可能会引起市场对公司内部稳定性及战略方向的关注，短期内影响投资者信心。
          </p>
          <p> 【股票回报预测】: +3%
                鉴于新产品发布的积极预期、技术创新展示和监管压力的部分缓解，这些因素有望推动股价上涨。然而，考虑到潜在的监管、供应链和市场份额担忧，以及高层变动的影响，预计上涨幅度不会过于激进，因此预测下周股票回报为“U3”，即价格上涨3%-4%之间。
          </p>
        </>
      )
    },
    {
      code: "NVDA",
      name: "Nvidia",
      change: "+3.55%",
      color: "green-800",
      width: "35%",
      modalContent: (
        <>
          <p>英伟达 {activeStock?.name}.</p>
          <p>【关键词】: 目标价上调、Q2财报、全球半导体排名、技术合作、HBM存储、AI模型、市场表现、游戏技术创新、光线追踪、DLSS 3</p>
          <p> 【积极因素】:
          - 英伟达目标价上调：多家投行如Evercore ISI 和韦德布什上调目标价，反映市场对其未来业绩的信心。
          - 即将公布的Q2财报受市场期待：华尔街分析师一致看好其财报表现，预期将有强劲的财务数据公布。
          - 全球半导体排名领先：英伟达在2024年第二季度全球TOP15半导体厂商中排名第一，显示其行业领导地位。
          - 技术合作与创新：与SK海力士和台积电合作开发下一代HBM存储技术，发布多项新AI模型和技术，展现技术领先和创新能力。
          - 强劲的市场表现：近期美股市场中表现突出，成交额多次居首，市值重回3万亿美元大关，获得多家投行和私募基金的青睐。
          </p>
          <p>【潜在担忧】:
          - 尽管目标价上调，但需警惕市场预期已充分反映在当前股价中，存在预期落空的风险。
          - 全球宏观经济环境的不确定性，如全球经济衰退或高通胀，可能对消费者和企业支出产生负面影响。
          - 供应链问题可能导致生产成本上升和交付延迟，影响短期利润和股价表现。
          - 竞争加剧，尤其是在GPU和AI芯片市场，可能对市场份额造成压力。
          - 技术替代风险，新型计算架构的出现可能威胁GPU的主导地位。
          - 波动性风险：科技股的高波动性可能因市场情绪变化导致股价大幅波动。
          </p>
          <p> 【股票回报预测】: +7%
          理由分析：尽管存在一定的潜在担忧，但基于英伟达近期的强劲表现，包括目标价上调、市场对其财报的乐观预期、全球半导体排名领先、以及在技术合作与游戏领域的持续创新，预计下周股票回报将有显著上涨，可能超过5%，因此预测为“U5+”。需要注意的是，高预期也可能带来市场反应的不确定性，但整体上行趋势较为明显。
          </p>
        </>
      )
    },
    {
      code: "600519",
      name: "贵州茅台",
      change: "+2.00%",
      color: "green-800",
      width: "15%",
      modalContent: (
        <>
          <p>贵州茅台 {activeStock?.name}.</p>
          <p>【关键词】: 新防伪技术、固态电池、金融版图、中秋文创套盒、飞天茅台价格预期、市场战略调整、库存压力、价格波动、白酒股下跌、市场情绪。</p>
          <p>【积极因素】:
          - 茅台推出新防伪技术“手眼识别”，加强了品牌保护，提升消费者信任，有助于巩固市场地位。
          - 进军固态电池领域和扩展金融版图显示公司多元化经营策略，可能开辟新的收入来源，增强长期盈利能力。
          - 中秋文创套盒的推出和飞天茅台价格预期上涨表明茅台在高端市场和节日销售中的强势地位，预计带来短期销售增长。
          - 市场战略调整，瞄准“新商务”消费群体，反映公司对市场变化的敏锐捕捉和灵活应对，有助于提升市场份额。
          </p>
          <p>【潜在担忧】:
          - 白酒市场整体面临的库存压力与价格波动，尽管茅台批价回升，但库存危机的担忧仍存，可能影响短期股价表现。
          - 部分白酒股下跌，市场情绪可能波及茅台，尤其是考虑到近期股价波动，投资者信心或受影响。
          - 白酒企业半年报显示中小白酒企业压力增大，市场整体环境的不确定性可能对茅台构成间接挑战。
          </p>
          <p> 【股票回报预测】: +2%
          </p>
        </>
      )
    },
    {
      code: "600383",
      name: "金地集团",
      change: "-2.50%",
      color: "red-800",
      width: "25%",
      modalContent: (
        <>
          <p>金地集团 {activeStock?.name}.</p>
          <p>【关键词】:
          - 代建策略
          - 融资买入
          - 美元债偿还
          - 市场调整
          - 销售数据</p>
          <p>【积极因素】:
          - **代建策略强化**：金地管理的代建策略得到强调，显示公司在业务模式上的创新和适应市场变化的能力。
          - **融资买入增加**：金地集团连续获得大额融资买入，表明市场对公司前景的信心增强。
          - **美元债偿清**：公司已偿还所有到期的美元债务，展现了良好的财务健康状况，减轻了市场对公司财务风险的担忧。
          </p>
          <p>【潜在担忧】:
          - **销售数据下滑**：前7个月累计签约金额大幅下降，反映市场压力及需求疲软。
          - **市场调整阶段**：整体市场仍在调整，政策效果减弱，销售数据持续低迷，影响市场情绪。
          - **行业竞争与政策调控**：房地产市场面临政策调控和行业竞争加剧的双重压力，可能制约公司业绩增长。
          </p>
          <p> 【股票回报预测】: -3%
          基于本周的新闻摘要和关键词分析，金地集团在融资活动和财务健康方面的正面消息可能暂时提振投资者信心，但销售数据下滑和市场调整的负面影响不容忽视。考虑到近8周股价波动趋势中包含两次明显的下跌（D5+ 和 D5），且当前市场仍处于调整阶段，预计短期内市场情绪仍将受制于行业基本面和宏观经济环境。因此，尽管有融资买入和美元债偿清的利好，但鉴于销售数据的不利影响和行业面临的挑战，预测下周的股票回报可能为**D3**，即价格下跌3%-4%之间，反映了市场对于房地产行业短期前景的谨慎态度。然而，若市场对代建策略的正面解读超出预期，或者有额外的利好消息出现，实际表现可能优于预测。
          </p>
        </>
      )
    }
  ];

  return (
    <>
      <div className="p-5">
        <div className="text-[#002f6c] font-bold text-3xl">市场</div>
        <div className="mt-5 bg-[#cfd8e21a] p-5 border border-[#b9c7d5] border-dashed border-t-[#002f6c] border-t-solid border-t-4">
          <div className="mt-5">
            <span className="text-[#002f6c] font-bold text-xl">大模型股价预测</span>
          </div>

          <Row gutter={[16, 24]} className="mt-5">
            {stocks.map((stock, index) => (
              <Col span={12} key={index}>
                <table className="w-full mt-5">
                  <tr>
                    <td className="w-[15%]">
                      {stock.code}
                      <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => handleOpenModal(stock)}
                        style={{ marginLeft: "8px" }}
                      />
                    </td>
                    <td className="w-[35%]">{stock.name}</td>
                    <td className="w-[10%]">{stock.change}</td>
                    <td className="w-[40%]">
                      <div className={`h-[15px] bg-${stock.color}`} style={{ width: stock.width }}></div>
                    </td>
                  </tr>
                </table>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Modal
        title={`${activeStock?.name}`}
        centered
        open={open}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        width={1000}
      >
        {activeStock?.modalContent}
      </Modal>
    </>
  );
};

export default MarketMovers;

