import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router"

import {
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Layout, Menu, Input,Row ,Col } from 'antd';

  import { storage } from "../../../util/storage";
  
  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'), 
        getItem('Team 2', '8')
    ]),
  ];

export const LayOut = () =>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        !storage.get() && navigate("/login")
    },[navigate])
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible>
            <div className="logo" style={{
                "backgroundColor": "#ffffff70",
                "width" : "100%",
                "height" : "11%",
            }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row align="middle" 
                justify="space-around"
            style={{
                height:"100%"
            }}>
                <Col span={12}>
                    <Input.Group compact>
                        <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
                    </Input.Group>
                </Col>
                <Col>
                    <UserOutlined 
                        style={{
                            fontSize:"24px",
                            color:"#fff"
                        }}
                    />
                </Col>
            </Row>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright © December and Company Inc.</Footer>
          </Layout>
        </Layout>
      );
}