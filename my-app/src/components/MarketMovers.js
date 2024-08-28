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
      code: "PDD",
      name: "拼多多",
      change: "-6.00%",
      color: "red-800",
      width: "60%",
      modalContent: (
        <>
          <p>拼多多 {activeStock?.name}.</p>
          <p>【关键词】:</p>
          <ul>
            <li>• 拼多多</li>
            <li>• 股价暴跌</li>
            <li>• 财报表现</li>
            <li>• 机构评级下调</li>
            <li>• 长期发展战略</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 拼多多在过去一年中展示了强劲的营收增长，这使得其在竞争激烈的电商市场中保持了一定的竞争力。</li>
            <li>• 全球化和跨境电商机会的增加为拼多多开辟了新的市场，特别是在新兴市场中表现强劲。</li>
            <li>• 公司积极应对市场变化，通过创新和战略调整继续吸引新的用户并提高市场份额。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 拼多多的股票近期遭遇大跌，主要由于财报表现低于市场预期，导致投资者信心动摇。</li>
            <li>• 多家机构下调了对拼多多的评级，进一步加剧了市场的担忧和股票价格的波动。</li>
            <li>• 公司策略侧重于长期发展，可能在短期内牺牲利润，这可能不符合部分投资者的预期。</li>
          </ul>
          <p>【股票回报预测】: -6%</p>
          <p>
            • 基于以上信息，我们可以看到拼多多近期遭遇了严重的市场反应，包括股价的大幅下挫和财报的不及预期，这导致了多家机构下调了对其的评级和目标价。公司的策略表明短期内不会关注分红或回购，这可能进一步影响投资者信心。结合近8周的股价波动趋势，尤其是最后两周的大幅下跌，可以推测市场对拼多多的前景存在显著的不确定性。
          </p>
        </>
      )
    },
    {
      code: "601225",
      name: "陕煤集团",
      change: "+2.50%",
      color: "green-800",
      width: "25%",
      modalContent: (
        <>
          <p>陕煤集团 {activeStock?.name}.</p>
          <p>【关键词】:</p>
          <ul>
            <li>• 陕煤集团</li>
            <li>• 煤炭价格</li>
            <li>• 产能扩展</li>
            <li>• 能源结构调整</li>
            <li>• 政府政策支持</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 陕煤集团受益于政府政策的支持，特别是在煤炭行业的政策环境中，得以扩大其市场份额。</li>
            <li>• 产能扩展计划显示了公司在应对市场需求变化方面的灵活性和前瞻性。</li>
            <li>• 陕煤集团表现出了稳健的财务状况，并且国际市场对煤炭的需求增加，为公司带来了更多的收入机会。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 环保政策的压力正在增加，可能对公司未来的业务扩展和盈利能力构成挑战。</li>
            <li>• 市场对煤炭的长期需求存在不确定性，特别是在国内能源结构调整的背景下，可能对公司业务产生负面影响。</li>
          </ul>
          <p>【股票回报预测】: +2.5%</p>
          <p>
            • 陕煤集团在政府政策的支持下，继续推动产能扩展，并且在国际市场上取得了一定的增长。然而，环保政策的压力以及国内能源结构调整可能对煤炭行业的长期发展带来挑战。基于当前市场状况，预计该股短期内将有温和的上涨趋势，回报预测为2.5%。
          </p>
        </>
      )
    },

    {
      code: "AAPL",
      name: "Apple",
      change: "+4.55%",
      color: "green-800",
      width: "45%",
      modalContent: (
        <>
          <p>苹果手机 {activeStock?.name}.</p>
          <p>【关键词】:</p>
          <ul>
            <li>• iPhone 16</li>
            <li>• Apple Watch 10</li>
            <li>• 智能戒指专利</li>
            <li>• 可折叠屏MacBook</li>
            <li>• 欧盟监管</li>
            <li>• 印度制造</li>
            <li>• 市场份额</li>
            <li>• 高层变动</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 随着9月21日苹果秋季新品发布会的临近，市场对iPhone 16、Apple Watch 10及其他潜在新品如智能戒指和可折叠屏MacBook的期待情绪高涨，有望提振股价。</li>
            <li>• 苹果曝光的智能戒指专利和对未来折叠屏MacBook的计划，展示了公司在可穿戴设备和便携式计算领域的创新实力，可能吸引投资者关注。</li>
            <li>• 苹果对iOS和iPadOS的调整，允许用户删除大多数默认应用，反映了公司对用户需求的响应和灵活性，有助于提升品牌形象和用户满意度。</li>
            <li>• 英国市场监管机构暂停对苹果应用商店的调查，等待新法律出台，减少了近期的法规不确定性，可能对股价形成正面支撑。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 苹果在欧盟面临的监管压力要求其开放生态系统，可能影响其商业模式和收入结构，引发市场对长期盈利能力的担忧。</li>
            <li>• 尽管鸿海董事长回应了印度iPhone制造良率的问题，但市场仍可能对供应链稳定性和成本控制保持警惕。</li>
            <li>• 苹果在韩国市场份额的连续下滑和取消iPhone Plus机型的消息，提示了产品线调整的风险，以及在特定市场的竞争力减弱。</li>
            <li>• App Store副总裁的离职和团队重组，可能会引起市场对公司内部稳定性及战略方向的关注，短期内影响投资者信心。</li>
          </ul>
          <p>【股票回报预测】: +3%</p>
          <p>
            • 鉴于新产品发布的积极预期、技术创新展示和监管压力的部分缓解，这些因素有望推动股价上涨。然而，考虑到潜在的监管、供应链和市场份额担忧，以及高层变动的影响，预计上涨幅度不会过于激进，因此预测下周股票回报为“U3”，即价格上涨3%-4%之间。
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
          <p>【关键词】:</p>
          <ul>
            <li>• 目标价上调</li>
            <li>• Q2财报</li>
            <li>• 全球半导体排名</li>
            <li>• 技术合作</li>
            <li>• HBM存储</li>
            <li>• AI模型</li>
            <li>• 市场表现</li>
            <li>• 游戏技术创新</li>
            <li>• 光线追踪</li>
            <li>• DLSS 3</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 多家投行如Evercore ISI 和韦德布什上调了英伟达的目标价，反映了市场对其未来业绩的信心。</li>
            <li>• 华尔街分析师一致看好英伟达即将公布的Q2财报，预期将有强劲的财务数据公布。</li>
            <li>• 英伟达在2024年第二季度全球TOP15半导体厂商中排名第一，显示其在行业中的领导地位。</li>
            <li>• 与SK海力士和台积电合作开发下一代HBM存储技术，并发布了多项新的AI模型和技术，展现了公司在技术创新和合作方面的实力。</li>
            <li>• 在美股市场中，英伟达表现强劲，成交额多次居首，并且市值重回3万亿美元大关，获得了多家投行和私募基金的青睐。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 尽管目标价上调，市场预期可能已经充分反映在当前股价中，因此存在预期落空的风险。</li>
            <li>• 全球宏观经济环境的不确定性，如全球经济衰退或高通胀，可能对消费者和企业支出产生负面影响。</li>
            <li>• 供应链问题可能导致生产成本上升和交付延迟，影响英伟达的短期利润和股价表现。</li>
            <li>• 在GPU和AI芯片市场中，竞争加剧可能对英伟达的市场份额造成压力。</li>
            <li>• 新型计算架构的出现可能威胁到GPU的主导地位，存在技术替代的风险。</li>
            <li>• 科技股的高波动性可能因市场情绪变化导致英伟达的股价大幅波动。</li>
          </ul>
          <p>【股票回报预测】: +7%</p>
          <p>
            • 尽管存在一定的潜在担忧，但基于英伟达近期的强劲表现，包括目标价上调、市场对其财报的乐观预期、全球半导体排名领先、以及在技术合作与游戏领域的持续创新，预计下周股票回报将有显著上涨，可能超过5%，因此预测为“U5+”。需要注意的是，高预期也可能带来市场反应的不确定性，但整体上行趋势较为明显。
          </p>
        </>
      )
    },
    {
      code: "600519",
      name: "贵州茅台",
      change: "+1.50%",
      color: "green-800",
      width: "15%",
      modalContent: (
        <>
          <p>贵州茅台 {activeStock?.name}.</p>
          <p>【关键词】:</p>
          <ul>
            <li>• 新防伪技术</li>
            <li>• 固态电池</li>
            <li>• 金融版图</li>
            <li>• 中秋文创套盒</li>
            <li>• 飞天茅台价格预期</li>
            <li>• 市场战略调整</li>
            <li>• 库存压力</li>
            <li>• 价格波动</li>
            <li>• 白酒股下跌</li>
            <li>• 市场情绪</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 茅台推出的新防伪技术“手眼识别”加强了品牌保护，提升了消费者信任，有助于巩固市场地位。</li>
            <li>• 进军固态电池领域和扩展金融版图显示了公司多元化经营策略，可能开辟新的收入来源，增强长期盈利能力。</li>
            <li>• 中秋文创套盒的推出和飞天茅台价格预期的上涨表明茅台在高端市场和节日销售中的强势地位，预计会带来短期销售增长。</li>
            <li>• 茅台的市场战略调整，瞄准“新商务”消费群体，反映了公司对市场变化的敏锐捕捉和灵活应对，有助于提升市场份额。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 白酒市场整体面临的库存压力与价格波动，尽管茅台批价回升，但库存危机的担忧仍存，可能影响短期股价表现。</li>
            <li>• 部分白酒股的下跌可能影响到茅台，尤其是在市场情绪负面时，投资者信心可能会受影响。</li>
            <li>• 白酒企业的半年报显示中小白酒企业面临压力增加，这可能对茅台的市场环境带来间接挑战。</li>
          </ul>
          <p>【股票回报预测】: +2%</p>
          <p>
            • 根据茅台的市场表现和当前的市场环境，预计该股在未来一周内将保持温和上涨，回报预测为2%。
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
          <p>【关键词】:</p>
          <ul>
            <li>• 代建策略</li>
            <li>• 融资买入</li>
            <li>• 美元债偿还</li>
            <li>• 市场调整</li>
            <li>• 销售数据</li>
          </ul>
          <p>【积极因素】:</p>
          <ul>
            <li>• 金地管理的代建策略得到了强化，显示了公司在业务模式上的创新和适应市场变化的能力。</li>
            <li>• 金地集团连续获得大额融资买入，表明了市场对公司前景的信心增强。</li>
            <li>• 公司已偿还所有到期的美元债务，展现了良好的财务健康状况，减轻了市场对公司财务风险的担忧。</li>
          </ul>
          <p>【潜在担忧】:</p>
          <ul>
            <li>• 前7个月累计签约金额大幅下降，反映了市场压力及需求疲软，可能对公司短期内的业绩表现造成负面影响。</li>
            <li>• 整体市场仍在调整，政策效果减弱，销售数据持续低迷，可能影响市场情绪并对股价形成压力。</li>
            <li>• 房地产市场面临政策调控和行业竞争加剧的双重压力，这可能制约金地集团的业绩增长。</li>
          </ul>
          <p>【股票回报预测】: -3%</p>
          <p>
            • 基于本周的新闻摘要和关键词分析，金地集团在融资活动和财务健康方面的正面消息可能暂时提振投资者信心，但销售数据下滑和市场调整的负面影响不容忽视。考虑到近8周股价波动趋势中包含两次明显的下跌（D5+ 和 D5），且当前市场仍处于调整阶段，预计短期内市场情绪仍将受制于行业基本面和宏观经济环境。因此，尽管有融资买入和美元债偿清的利好，但鉴于销售数据的不利影响和行业面临的挑战，预测下周的股票回报可能为“D3”，即价格下跌3%-4%之间，反映了市场对于房地产行业短期前景的谨慎态度。然而，若市场对代建策略的正面解读超出预期，或者有额外的利好消息出现，实际表现可能优于预测。
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

