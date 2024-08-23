
import './NavBar.css';
import React, { useState } from 'react';
import { MenuUnfoldOutlined,AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';

const Navbar = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('现货市场', 'sub1', <MailOutlined />, [
      // getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      // getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),\
      getItem('贵金属', '1'),
      getItem('石油', '2'),
    ]),
    getItem('金融市场', 'sub2', <AppstoreOutlined />, [
      getItem('外呼', '3'),
      getItem('期货', '4'),
      getItem('数字货币', '5'),
      getItem('债券', '6'),
      getItem('货币', '7'),
      getItem('ETF', '8'),
      // getItem('外汇', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('地区市场', 'sub3', <SettingOutlined />, [
      getItem('A股', '9'),
      getItem('港股', '10'),
      getItem('美股', '11'),
    ]),
    getItem('宏观', 'sub4', <SettingOutlined />, [
      getItem('地缘局势', '9'),
      getItem('人物', '10'),
      getItem('经济数据', '11'),
      getItem('政策', '12'),
      getItem('央行', '13'),
      getItem('灾害事故','14'),
    ]),
    getItem('微观', 'sub5', <SettingOutlined />, [
      getItem('公司', '15'),
      getItem('基金', '16'),
      getItem('投行机构', '17'),
    ]),
    getItem('行业', 'sub6', <SettingOutlined />, [
      getItem('证券','18'),
      getItem('医疗服务','19'),
      getItem('生物制品','20'),
      getItem('黑色家电','21'),
      getItem('多元金融','22'),
      getItem('软件开发','23'),
      getItem('自动化设备','24'),
      getItem('影视院线','25'),
      getItem('旅游及酒店','26'),
      getItem('能源金属','27'),
      getItem('电机','28'),
      getItem('厨卫电器','29'),
      getItem('医疗器械','30'),
      getItem('教育','31'),
      getItem('美容护理','32'),
      getItem('化学制药','33'),
      getItem('电池','34'),
      getItem('文化传媒','35'),
      getItem('白酒','36'),
      getItem('工业金属','37'),
      getItem('食品加工制造','38'),
      getItem('半导体','39'),
      getItem('光伏设备','40'),
      getItem('游戏','41'),
      getItem('电子化学品','42'),
      getItem('化学纤维','43'),
      getItem('保险','44'),
      getItem('煤炭开采加工','45'),
      getItem('小金属','46'),
      getItem('汽车零部件','47'),
      getItem('白色家电','48'),
      getItem('IT服务','49'),
      getItem('工程机械','50'),
      getItem('中药','51'),
      getItem('通用设备','52'),
      getItem('化学制品','53'),
      getItem('其他社会服务','54'),
      getItem('互联网电商','55'),
      getItem('小家电','56'),
      getItem('金属新材料','57'),
      getItem('机场航运','58'),
      getItem('光学光电子','59'),
      getItem('专用设备','60'),
      getItem('包装印刷','61'),
      getItem('家居用品','62'),
      getItem('纺织制造','63'),
      getItem('贵金属','64'),
      getItem('其他电源设备','65'),
      getItem('塑料制品','66'),
      getItem('化学原料','67'),
      getItem('油气开采及服务','68'),
      getItem('房地产','69'),
      getItem('橡胶制品','70'),
      getItem('造纸','71'),
      getItem('通信设备','72'),
      getItem('服装家纺','73'),
      getItem('计算机设备','74'),
      getItem('农化制品','75'),
      getItem('消费电子','76'),
      getItem('饮料制造','77'),
      getItem('养殖业','78'),
      getItem('环保设备','79'),
      getItem('电网设备','80'),
      getItem('物流','81'),
      getItem('石油加工贸易','82'),
    ]),
  ];
  const onClick = (e) => {
    console.log('click', e);
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
      >
        <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
      </Drawer>

      <nav className="navbar ml-2">
        <ul className="navbar-list">
          <li onClick={showDrawer} className="navbar-item"><MenuUnfoldOutlined /></li>
          <li className="navbar-item">Markets</li>
          <li className="navbar-item">Business</li>
          <li className="navbar-item">Investing</li>
          <li className="navbar-item">Tech</li>
          <li className="navbar-item">Politics</li>
        </ul>
      </nav>
    </>
  );
};



export default Navbar;



