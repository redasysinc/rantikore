import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
    AppstoreTwoTone,
    LoginOutlined,
    AccountBookTwoTone,
    HomeTwoTone,
    WomanOutlined,
    MedicineBoxTwoTone
} from "@ant-design/icons";
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '',
        label: (<img src='./src/assets/images/appointment.JPEG'  height="60px" alt="logo"/>)
    },
    {
        label: 'HOME',
        key: 'home',
        icon: <HomeTwoTone/>,
    },
    {
        label: 'NEWS',
        key: 'app',
        icon: <AppstoreTwoTone />,
        disabled: true,
    },
    {
        label: 'PATIENTS',
        key: 'patients',
        icon: <WomanOutlined />,
        children: [
            {
                label: 'Login',
                key: 'login',
                icon: <LoginOutlined />,

            },
            {
                label: 'Register',
                key: 'register',
                icon: <AccountBookTwoTone />
            },
        ],
    },
    {
        label: 'PROVIDERS',
        key: 'providers',
        icon: <MedicineBoxTwoTone />,
        children: [
            {
                label: 'Find a Provider',
                key: 'search',

            },
            {
                label: 'My Providers',
                key: 'myProviders',
            },
        ],
    },
    {
        key: 'faq',
        label: 'FAQ',
    },
    {
        key: 'services',
        label: 'SERVICES',
    },
    {
        key: 'gallery',
        label: 'GALLERY',
    },
    {
        key: 'about',
        label: 'ABOUT',
    },
];


export default items
