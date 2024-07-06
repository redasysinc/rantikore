import React from 'react';
import {Layout as Layout, Header, Breadcrumb, Menu, theme, ConfigProvider} from 'antd';
import TopBar from './TopBar'

const {Content, Footer} = Layout;


const Site: React.FC = ({children}) => {
    // const {
    //     token: {colorBgContainer, borderRadiusLG},
    // } = theme.useToken();
    const handleMenu = () => {
    }

    return (
        <Layout >
            <TopBar/>
            <Content >
                {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                {/*    <Breadcrumb.Item>TO</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>DO</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>IMPLEMENT</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div >
                    {children}
                </div>
            </Content>
            {/*<Footer>*/}
            {/*    Redasys ©{new Date().getFullYear()}*/}
            {/*</Footer>*/}
        </Layout>
    )
}

export default Site;
