// @ts-nocheck
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {
    AppstoreTwoTone,
    LoginOutlined,
    AccountBookTwoTone,
    HomeTwoTone,
    WomanOutlined,
    MedicineBoxTwoTone
} from "@ant-design/icons";
import React from "react";
import {Link, NavLink} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '',
        label: (<img src='./images/appointment.JPEG' height="60px" alt="logo"/>)
    },
    {
        label: (<NavLink to='/'>HOME</NavLink>),
        key: 'home',
        icon: <HomeTwoTone/>,
        disabled: false,
    },
    {
        label: 'NEWS',
        key: 'app',
        icon: <AppstoreTwoTone/>,
        disabled: true,
    },
    {
        label: 'PATIENTS',
        key: 'patients',
        icon: <WomanOutlined/>,
        children: [
            {
                label: 'Login',
                key: 'login',
                icon: <LoginOutlined/>,

            },
            {
                label: 'Register',
                key: 'register',
                icon: <AccountBookTwoTone/>
            },
        ],
    },
    {
        label: 'PROVIDERS',
        key: 'providers',
        icon: <MedicineBoxTwoTone/>,
        children: [
            {
                label: (<NavLink to="/providers">'Find a Provider'</NavLink>),
                key: 'providers.search'
            },
            {
                label: 'My Providers',
                key: 'providers.myProviders',
            },
        ],
    },
    {
        key: 'services',
        label: 'SERVICES',
        children: [
            {
            key: 'services.therapy',
            label: (<NavLink to={'/therapy'}>Therapists</NavLink>)
        },
            {
                key: 'services.support',
                label: (<NavLink to={'/support'}>Support Groups</NavLink>),
            },
            {
                key: 'services.mental',
                label:(<NavLink to={'/psych'}>Mental Health</NavLink>),
            },
            {
                key: 'services.family',
                label:(<NavLink to={'/family'}>Family Planning</NavLink>),
            },
            {
                key: 'services.primary',
                label:(<NavLink to={'/wellness'}>Primary Care and Wellness</NavLink>),
            },
        ]

    },
    {
        key: 'faq',
        label: 'FAQ',
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
