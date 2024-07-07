// @ts-nocheck
import React, {ReactElement} from 'react';
import {Layout} from 'antd';
import TopBar from './TopBar'

const {Header, Content} = Layout;


const Site: React.FC = ({children}: { children: any }) => {
    return (
        <Layout>
            <Header>
                <TopBar/>
            </Header>
            <Content>
                {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                {/*    <Breadcrumb.Item>TO</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>DO</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>IMPLEMENT</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <div>
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
