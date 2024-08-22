
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
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
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
          <ul className="navbar-search">
            <input type="text" placeholder="搜索" className="search-input" />
            <img src={`${process.env.PUBLIC_URL}/search icon.png`} alt="Search Icon" className="search-icon" />
          {/* <button className="search-button">
            <i className="search-icon"></i>
          </button> */}
          </ul>
        </ul>
      </nav>
    </>
  );
};



export default Navbar;



