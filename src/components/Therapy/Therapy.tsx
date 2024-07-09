/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import React, {useState} from 'react'
import {Row, Col, Layout, Card, List, Button} from 'antd'
import ProviderMapbox from "../Mapbox/ProviderMapbox.tsx";
import therapists, {preamble} from "./therapists.ts";
import {consecutiveUniqueRandom} from "unique-random";
import {ClockCircleTwoTone, PhoneTwoTone} from "@ant-design/icons";


const {Content, Footer, Sider} = Layout

function Therapy() {
    const [booking, setBooking] = useState(false)
    const random = consecutiveUniqueRandom(0, therapists.length - 1);
    const [vendor, setVendor] = useState()
    const selectMapItem = (e) => {
        const v = therapists[random()]
        console.log(v)
        setVendor(v)
    }
    const ds = therapists.filter((t, i) => {
        return i < 5
    }).map(x => {
        return x.profile.name
    })

    return (
        <>
            <Row>
                <Col span={booking ? 12 : 24}>
                    {vendor ?
                        <Card style={{
                            fontSize: '1.25rem',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                            <Layout>
                                <Content>
                                    <p>{vendor.profile.name}</p>
                                    <p>{vendor.profile.company}</p>
                                    <p>{vendor.profile.address}</p>
                                </Content>
                                <Footer>
                                    <div>
                                        <Button style={{marginRight: '30px'}} type={'danger'} onClick={() => {
                                            setVendor(null)
                                        }}>Reset</Button>
                                        <Button className={'btn'} type={'primary'} onCLick={() => {
                                            setBooking(!booking)
                                        }}><ClockCircleTwoTone/>View Schedule</Button>
                                    </div>
                                </Footer>
                            </Layout>
                        </Card> :
                        <Card style={{
                            fontSize: '1.75rem',
                            margin: '0 auto 0 5px'
                        }}>{preamble}</Card>}
                </Col>
                <Col span={12}>

                </Col>
            </Row>
            <Row gutter={0}>
                <Col span={24}>
                    <Layout>
                        <Sider >
                            <Card style={{minWidth: '30vw', minHeight:'100%'}} title={'Choose one below:'}>
                                <List dataSource={ds}
                                      renderItem={item => (
                                          <div style={{marginBottom: '15px', fontWeight: 500}} onClick={() => {
                                              setVendor(therapists.filter(x => (x.profile.name === item))[0])
                                          }}>{item}</div>
                                      )}
                                />
                            </Card>
                        </Sider>
                        <Content >
                            <Card title={'Or, find a provider near you'} style={{minWidth: '100%'}}>
                                <ProviderMapbox selectMapItem={selectMapItem}/>
                            </Card>
                        </Content>
                    </Layout>
                </Col>
            </Row>
        </>
    )
}


export default Therapy;
