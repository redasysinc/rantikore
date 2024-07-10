// @ts-nocheck
import React, {useState} from 'react';
import {Row, Col, Layout, Card, List, Button} from 'antd'
import {Calendar, theme} from 'antd';
import type {CalendarProps} from 'antd';
import type {Dayjs} from 'dayjs';
import useTherapyStore from "../../store/therapy-store.ts";
import {User} from "../../types/user.ts";
import {IProfessional} from "../../types/iprofessional.ts";
import {AppointmentType} from "../../types/appointment.ts";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

const {Content, Header, Footer, Sider} = Layout

interface OwnProps {
}

type Props = OwnProps;

const DateGrid: React.FC = (props) => {
    const {
        isBooking,
        setIsBooking,
        provider,
        appointments,
        addAppointment,
        getOpenTimeslots,
        timeSlots
    } = useTherapyStore()
    const [showTime, setShowTime] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid #FFF`,
        borderRadius: '20px',
        display: "block",
        margin: '0 auto',
    };

    const dateSelected = ({_d}) => {
        setSelectedDate(_d)
        getOpenTimeslots(_d)
        setShowTime(true)
        console.log(timeSlots)
    }
    return (
        <Col span={12}>
            <Card title={<div style={{margin: '0 25px'}}>When would you like to come in?</div>}
                  style={{
                      fontSize: '1.25rem',
                      justifyContent: 'center',
                      alignContent: 'center'
                  }}>
                <Layout>
                    <Content>

                        {(!isBooking && appointments.length) ?
                            <div style={{minWidth: '100%', margin:'0 25px', display: 'block'}}>
                                <h2>Your appointment with {provider.profile.name} is on:</h2>
                                <h4>{appointments[appointments.length - 1].date} @ {appointments[appointments.length - 1].time}</h4>
                            </div>
                            : showTime ?

                                <div style={wrapperStyle}>
                                    <h3>{selectedDate.toLocaleDateString('en-us')}</h3>
                                    {timeSlots.map((x, i) => {
                                        return <Button key={i} shape={'round'} onClick={(e) => {
                                            addAppointment({
                                                type: 0,
                                                date: selectedDate.toLocaleDateString('en-us'),
                                                time: x.time,
                                                patient: {},
                                                provider: provider
                                            })
                                            setShowTime(false)
                                            setIsBooking(false)
                                            console.log(appointments)
                                        }} disabled={!x.available}>{x.time}</Button>
                                    })}
                                    <Button type={'primary'} onClick={() => {
                                        setShowTime(false)
                                    }}>Pick another date</Button>
                                </div>
                                : isBooking &&
                                <div style={wrapperStyle}>
                                    <Calendar fullscreen={false}
                                              onSelect={dateSelected}
                                              onPanelChange={onPanelChange}/>
                                </div>
                        }

                    </Content>
                </Layout>
            </Card>
        </Col>
    );
};

export default DateGrid;
