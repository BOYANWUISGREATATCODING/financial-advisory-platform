import { Row, Col } from "antd"

const MarketMovers = () => {
    return (<div className="p-5">
        <div className="text-[#002f6c] font-bold text-3xl">Markets</div>
        <div className="mt-5 bg-[#cfd8e21a] p-5 border border-[#b9c7d5] border-dashed border-t-[#002f6c] border-t-solid border-t-4" style={{ borderTopStyle: 'solid'}}>
           <div className="mt-5">
                <span className="text-[#002f6c] font-bold text-xl">MARKET MOVERS</span>
           </div>
           <Row gutter={20} className="mt-5">
            <Col span={12}>
                <div className="text-lg font-bold">top</div>
                <table className="w-full mt-5">
                    <tr>
                        <td>FPH-NZ</td>
                        <td>Fisher & Paykel Healthcare Corporation Lts</td>
                        <td>4.55%</td>
                        <td className="w-[42%]">
                            <div className="w-[50%] bg-green-800 h-[15px]"></div>
                        </td>
                    </tr>
                </table>
            </Col>
            <Col span={12}>
                <div className="text-lg font-bold">bottom</div>
            </Col>
           </Row>
        </div>
    </div>)
}

export default MarketMovers