// @ts-nocheck
import React, {FunctionComponent, useState} from 'react';
import { Menu, Image} from 'antd'
import items from './menu-data.tsx'
import {Layout} from 'antd'
// const {Header} = Layout;
interface OwnProps {
}
type Props = OwnProps;

const TopBar: FunctionComponent = (props:any) => {
    //const [current, setCurrent] = useState();
    const handleMenu = (e:any) => {
        console.log('click ', e);
        //setCurrent(e.key);
    };

    return (
        <>

            <Menu
                style={{fontSize:'14px', justifyItems:'right'}}
                onClick={handleMenu}
                mode={'horizontal'}
                theme={'dark'}
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
