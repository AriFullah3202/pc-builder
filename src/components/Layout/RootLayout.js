import  { useState } from 'react';
import { Menu, Typography, Button, Drawer, Layout, } from 'antd';
const { Header, Content, Footer } = Layout;
import Image from 'next/image'

import React from "react"
import { EuroOutlined, HeartOutlined, BarsOutlined,SettingOutlined, MenuOutlined, CalculatorOutlined, FacebookFilled,LinkedinFilled,GoogleSquareFilled,TwitterSquareFilled,} from '@ant-design/icons';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const { SubMenu } = Menu;
const { Text } = Typography;


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
  getItem('Product', 'sub4', <SettingOutlined />, [
    getItem('Processor', '/Processor'), // Added labels to child items
    getItem('Motherboard', '/Motherboard'),
    getItem('RAM', '/RAM'),
    getItem('PowerSupplyUnit', '/PowerSupplyUnit'),
    getItem('StorageDevice', '/StorageDevice'),
    getItem('Monitor', '/Monitor'),
    getItem('Keyboard', '/keboard'),
    getItem('Mouse', '/mouse'),
  ]),
];
const RootLayout = ({children}) => {





    const [current, setCurrent] = useState('mail');
    const [visible, setVisible] = useState(false);
    

    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
    
      const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <Layout>
       <Header>

        <div>
        <div
  style={{
    float: 'left',
    width: '220px',
    height: '31px',
    margin: '20px 20px 10px 10px',
    fontSize: '32px',
    backgroundColor: 'rgba(255, 255, 255)',
    display: 'flex',
    alignItems: 'center', 
            justifyContent: 'center',
            }}
            >
            <a href="/" style={{ textAlign: 'center', textDecoration: 'none', color: 'blue' }}>
            PC-Builder
            </a>
            </div>

            <>
            <Button className={styles.menubtn} type="primary" shape="circle" icon={<MenuOutlined />} onClick={showDrawer}></Button>
            <Drawer title="PC-Builder" placement="right" onClose={onClose} visible={visible}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Menu
            defaultSelectedKeys={['/monitor']}
            defaultOpenKeys={['sub4']}
            mode="inline"
            theme="dark"
            inlineCollapsed={false} // Add this line if needed
            >
            {items.map((item) => (
            <Menu.SubMenu key={item.key} title={item.label}>
          {item.children.map((child) => (
            <Menu.Item key={child.key}>
              <Link href={child.key}>{child.label}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
      <Menu.Item>
        <Link href="/PC-Builder">PC Builder</Link>
      </Menu.Item>
    </Menu>

            </div>
          </Drawer>
        </>
  
      </div>
      <Menu
        className={styles.bigmenu}
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <div style={{display : 'flex' , flexDirection : 'row', justifyItems : 'center' , margin : 'auto' , gap : '50px'}}>

        <SubMenu key="finance" icon={<EuroOutlined />} title="Product" style={{textAlign: 'center' , margin : 'auto' , fontSize : '20px'}} popupOffset={[0, 8]} popupClassName={styles.subMenu}>
        {
          items.map(item => item.children.map((child) => (
            <Menu.Item key={child.key}>
              <Link href={child.key}>{child.label}</Link>
            </Menu.Item>
          )))
        }

        </SubMenu>
        <Menu.Item style={{ backgroundColor : '#7a59a6', margin : 'auto' , borderRadius : '7px' }}>
    <Link href="/PC-Builder" style={{fontSize : '20px', color : 'white'}}>PC Builder</Link>
  </Menu.Item>
        </div>
        </Menu>
       </Header>
       <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC-Builder-arif
        </h2>
        <p className={styles.social_icons}>
          <Link href="">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC-Builder ©2023 Created by Arif ullah
      </Footer>
        </Layout>
    );
};

export default RootLayout;