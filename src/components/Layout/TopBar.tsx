import React, {FunctionComponent, useState} from 'react';
import {Layout} from 'antd'
import { Menu, Image} from 'antd'
import items from './menu-data.tsx'

import {ArrowDownOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";

const {Header} = Layout;
interface OwnProps {
}
type Props = OwnProps;

const TopBar: FunctionComponent<Props> = (props) => {
    const [current, setCurrent] = useState();
    const handleMenu = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>

            <Menu
                style={{fontSize:'14px', justifyItems:'right'}}
                onClick={handleMenu}
                mode={'horizontal'}
                theme={'dark compact'}
                items={items}
                defaultSelectedKeys={['home']}>

                {/*<Menu.Item key={'home'}>HOME</Menu.Item>*/}
                {/*<Menu.Item key={'news'}>NEWS</Menu.Item>*/}
                {/*<Menu.Item key={'patient'} icon={<ArrowDownOutlined/>}>PATIENT</Menu.Item>*/}
                {/*<Menu.ItemGroup key={'patient'}>*/}
                {/*    <Menu.Item key={'login'}>LOGIN</Menu.Item>*/}
                {/*    <Menu.Item key={'register'}>REGISTER</Menu.Item>*/}
                {/*</Menu.ItemGroup>*/}
                {/*<Menu.ItemGroup key={'provider'} icon={<ArrowDownOutlined/>} title={'PROVIDERS'}>*/}
                {/*    <Menu.Item key={'find'}>PROVIDER SEARCH</Menu.Item>*/}
                {/*    <Menu.Item key={'myProviders'}>MY PROVIDERS</Menu.Item>*/}
                {/*</Menu.ItemGroup>*/}
                {/*<Menu.Item key={'faq'}>FAQ</Menu.Item>*/}
                {/*<Menu.Item key={'services'}>SERVICES</Menu.Item>*/}
                {/*<Menu.Item key={'gallery'}>GALLERY</Menu.Item>*/}
                {/*<Menu.Item key={'about'}>ABOUT</Menu.Item>*/}
            </Menu>
        </>
    )
};

export default TopBar;
