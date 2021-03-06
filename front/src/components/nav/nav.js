import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom'

import './nav.css'

const { Header, Content } = Layout;

export default class Nav extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            خانه
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        {/* <Link to=""> */}
                            نصب اپلیکیشن
                        {/* </Link> */}
                    </Menu.Item>
                    <Menu.Item key="3">
                        {/* <Link to=""> */}
                            تماس با ما
                        {/* </Link> */}
                    </Menu.Item>
                    <Menu.Item key="4">
                        {/* <Link to=""> */}
                            درباره ما
                        {/* </Link> */}
                    </Menu.Item>
                </Menu>
                </Header>
                <Layout>
                    <Sidebar/>
                    <Layout className="nav-layout">
                        <Content
                            className="site-layout-background"
                        >
                        {this.props.content}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
