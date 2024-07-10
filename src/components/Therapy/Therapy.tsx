/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import React, {useState} from 'react'
import {Row, Col, Layout, Card, List, Button} from 'antd'
import ProviderMapbox from "../Mapbox/ProviderMapbox.tsx";
import therapists, {preamble} from "./therapists.ts";
import {consecutiveUniqueRandom} from "unique-random";
import {ClockCircleTwoTone, PhoneTwoTone} from "@ant-design/icons";
import DateGrid from '../Calendar/Calendar'
import useTherapyStore from "../../store/therapy-store.ts";


const {Content, Header, Footer, Sider} = Layout

const appointments = [{
    date: new Date('7/12/2024 9:00AM'),
    patient: 'John Doe'
},
    {
        date: new Date('7/12/2024 9:30AM'),
        patient: 'Richard Martin'
    },
    {
        date: new Date('7/12/2024 11:00AM'),
        patient: 'Duane Roland'
    },
    {
        date: new Date('7/12/2024 11:30AM'),
        patient: 'Jack Heimser'
    },
    {
        date: new Date('7/12/2024 1:00PM'),
        patient: 'Mary Ebert'
    }]


function Therapy() {
    const {provider, setProvider, isBooking, setIsBooking, appointments} = useTherapyStore()
    const [date, setDate] = useState(new Date())
    const random = consecutiveUniqueRandom(0, therapists.length - 1);
    const selectMapItem = (e) => {
        const v = therapists[random()]
        console.log(v)
        setProvider(v)
    }
    const ds = therapists.filter((t, i) => {
        return i < 5
    }).map(x => {
        return x.profile.name
    })

    return (
        <>
            <Row>
                <Col span={(isBooking || (!isBooking && appointments.length)) ? 12 : 24}>
                    {provider ?
                        <Card style={{
                            fontSize: '1.25rem',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                            <Layout>
                                <Content>
                                    <p>{provider.profile.name}</p>
                                    <p>{provider.profile.company}</p>
                                    <p>{provider.profile.address}</p>
                                </Content>
                                <Footer>
                                    <div>
                                        <Button style={{marginRight: '30px'}} type={'danger'} onClick={() => {
                                            setProvider(null)
                                            setIsBooking(false)
                                        }}>Reset</Button>
                                        <Button style={{marginRight: '30px'}} type={'primary'} onClick={() => {
                                            setIsBooking(true)
                                        }}><ClockCircleTwoTone/>Continue</Button>

                                    </div>
                                </Footer>
                            </Layout>
                        </Card> :
                        <Card style={{
                            fontSize: '1.75rem',
                            margin: '0 auto 0 5px'
                        }}>{preamble}</Card>}
                </Col>
                {(isBooking || (!isBooking && appointments.length)) &&
                    <DateGrid/>
                }
            </Row>
            <Row gutter={0}>
                <Col span={24}>
                    <Layout>
                        <Sider>
                            <Card style={{minWidth: '30vw', minHeight: '100%'}} title={'Choose one below:'}>
                                <List dataSource={ds}
                                      renderItem={item => (
                                          <div style={{marginBottom: '15px', fontWeight: 500}} onClick={() => {
                                              setProvider(therapists.filter(x => (x.profile.name === item))[0])
                                          }}>{item}</div>
                                      )}
                                />
                            </Card>
                        </Sider>
                        <Content>
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
