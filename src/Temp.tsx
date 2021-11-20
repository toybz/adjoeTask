import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Content, Header} from 'antd/lib/layout/layout';
import {Breadcrumb, Col, Layout, Menu, Row} from "antd";
import Sider from "antd/es/layout/Sider";
import SubMenu from 'antd/lib/menu/SubMenu';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Add this to App.css
//@import '~antd/dist/antd.css';
function App() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible>

                <div style={{ height: "32px", margin: "16px" }}></div>
                <Menu defaultOpenKeys={['accounts']}  theme="dark" mode="inline">
                    <Menu.Item onClick={(e) => ''}>Menu 1</Menu.Item>
                    <Menu.Item onClick={(e) => ''}>Menu 1</Menu.Item>
                    <Menu.Item onClick={(e) => ''}>Menu 1</Menu.Item>
                    <SubMenu key="accounts"  title="Accounts">
                        <Menu.Item onClick={(e) => ''}>Menu 1</Menu.Item>
                        <Menu.Item onClick={(e) => ''}>Menu 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="dashboard">Dashboard</Menu.Item>
                        <Menu.Item key="logout" onClick={() => {

                        }}>Logout</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ margin: '0 16px' }}>

                    <BrowserRouter>
                        <Routes>
                            <Route path="dashboard" element={<p>dashboard</p>}>


                            </Route>
                        </Routes>
                    </BrowserRouter>



                    <Row>
                        <Col>
                            <h2>Test</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="4"></Col>
                        <Col span="16">Test</Col>
                        <Col span="4"></Col>
                    </Row>
                </Content>


            </Layout>
        </Layout >
    );
}

export default App;
