import React from 'react'
import { Layout, Input } from 'antd';

import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
    return <Header className="site-layout-background">
        <span className='icon'> <DeleteOutlined /></span>
        <span className='icon'> <EditOutlined /></span>
        <span className='icon'> <PlusOutlined /></span>
        <span className='icon'><Input placeholder="Search note" /></span>
    </Header>
}


export default AppHeader