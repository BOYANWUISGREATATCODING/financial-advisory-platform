
import './NavBar.css';
import React, { useState } from 'react';
import { MenuUnfoldOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Drawer, Menu, Space, Input } from 'antd';

const { Search } = Input;
const Navbar = ({ handleOnSelect }) => {
  
  function getItem (label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('现货市场', '现货市场', null, [
      getItem('贵金属', '贵金属'),
      getItem('石油', '石油'),
    ]),
    getItem('金融市场', '金融市场', null, [
      getItem('外呼', '外呼'),
      getItem('期货', '期货'),
      getItem('数字货币', '数字货币'),
      getItem('债券', '债券'),
      getItem('货币', '货币'),
      getItem('ETF', 'ETF'),
    ]),
    getItem('地区市场', '地区市场', null, [
      getItem('A股', 'A股'),
      getItem('港股', '港股'),
      getItem('美股', '美股'),
    ]),
    getItem('宏观', '宏观', null, [
      getItem('地缘局势', '地缘局势'),
      getItem('人物', '人物'),
      getItem('经济数据', '经济数据'),
      getItem('政策', '政策'),
      getItem('央行', '央行'),
      getItem('灾害事故', '灾害事故'),
    ]),
    getItem('微观', '微观', null, [
      getItem('公司', '公司'),
      getItem('基金', '基金'),
      getItem('投行机构', '投行机构'),
    ]),
    getItem('行业', '行业', null, [
      getItem('证券', '证券'),
      getItem('医疗服务', '医疗服务'),
      getItem('生物制品', '生物制品'),
      getItem('黑色家电', '黑色家电'),
      getItem('多元金融', '多元金融'),
      getItem('软件开发', '软件开发'),
      getItem('自动化设备', '自动化设备'),
      getItem('影视院线', '影视院线'),
      getItem('旅游及酒店', '旅游及酒店'),
      getItem('能源金属', '能源金属'),
      getItem('电机', '电机'),
      getItem('厨卫电器', '厨卫电器'),
      getItem('医疗器械', '医疗器械'),
      getItem('教育', '教育'),
      getItem('美容护理', '美容护理'),
      getItem('化学制药', '化学制药'),
      getItem('电池', '电池'),
      getItem('文化传媒', '文化传媒'),
      getItem('白酒', '白酒'),
      getItem('工业金属', '工业金属'),
      getItem('食品加工制造', '食品加工制造'),
      getItem('半导体', '半导体'),
      getItem('光伏设备', '光伏设备'),
      getItem('游戏', '游戏'),
      getItem('电子化学品', '电子化学品'),
      getItem('化学纤维', '化学纤维'),
      getItem('保险', '保险'),
      getItem('煤炭开采加工', '煤炭开采加工'),
      getItem('小金属', '小金属'),
      getItem('汽车零部件', '汽车零部件'),
      getItem('白色家电', '白色家电'),
      getItem('IT服务', 'IT服务'),
      getItem('工程机械', '工程机械'),
      getItem('中药', '中药'),
      getItem('通用设备', '通用设备'),
      getItem('化学制品', '化学制品'),
      getItem('其他社会服务', '其他社会服务'),
      getItem('互联网电商', '互联网电商'),
      getItem('小家电', '小家电'),
      getItem('金属新材料', '金属新材料'),
      getItem('机场航运', '机场航运'),
      getItem('光学光电子', '光学光电子'),
      getItem('专用设备', '专用设备'),
      getItem('包装印刷', '包装印刷'),
      getItem('家居用品', '家居用品'),
      getItem('纺织制造', '纺织制造'),
      // getItem('贵金属', '贵金属'),
      getItem('其他电源设备', '其他电源设备'),
      getItem('塑料制品', '塑料制品'),
      getItem('化学原料', '化学原料'),
      getItem('油气开采及服务', '油气开采及服务'),
      getItem('房地产', '房地产'),
      getItem('橡胶制品', '橡胶制品'),
      getItem('造纸', '造纸'),
      getItem('通信设备', '通信设备'),
      getItem('服装家纺', '服装家纺'),
      getItem('计算机设备', '计算机设备'),
      getItem('农化制品', '农化制品'),
      getItem('消费电子', '消费电子'),
      getItem('饮料制造', '饮料制造'),
      getItem('养殖业', '养殖业'),
      getItem('环保设备', '环保设备'),
      getItem('电网设备', '电网设备'),
      getItem('物流', '物流'),
      getItem('石油加工贸易', '石油加工贸易'),
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
  const onSelect = (item) => {
    handleOnSelect(item)
  }

    return (
    <>
      <Drawer
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
      >
        <Menu
          onSelect={onSelect}
          style={{
            width: 256,
          }}
          mode="vertical"
          items={items}
        />
      </Drawer>

      <nav className="ml-2 navbar">
        <ul className="navbar-list">
          <li onClick={showDrawer} className="navbar-item"><MenuUnfoldOutlined /></li>
          <li className="navbar-item">现货市场</li>
          <li className="navbar-item">金融市场</li>
          <li className="navbar-item">地区市场</li>
          <li className="navbar-item">宏观</li>
          <li className="navbar-item">微观</li>
          <ul className="navbar-search">
            <input type="text" placeholder="搜索" className="search-input" />
            <button className="search-button">
            <img src={`${process.env.PUBLIC_URL}/search icon.png`} alt="Search Icon" className="search-icon" />
          </button>
          </ul>
        </ul>
      </nav>
    </>
  );
};



export default Navbar;



