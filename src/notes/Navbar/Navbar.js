import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">NOTE 1</Menu.Item>
                <Menu.Item key="2">NOTE 2</Menu.Item>
                <Menu.Item key="3">NOTE 3</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar