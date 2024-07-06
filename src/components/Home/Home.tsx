// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Progress, Space} from 'antd'
import styles from './home.module.css'

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

    return (
        <>
            <div className={styles.bannerSlider}>
                <div>
                    <div>
                        <h1 id="typeit"> WELCOME TO YOUR PORTAL</h1>
                    </div>
                </div>
            </div>
            <Row gutter={16}>
                <Col span={12}>
                    <h2>
                        <span>QUALITY MEDICAL SERVICES</span> MAKE OUR PATIENTS HAPPY
                    </h2>
                    <article style={{color: '#000'}}>
                        Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae
                        argumentum
                        has. Latine
                        propriae quo no, unum ridens expetenda id sit, at usu eius eligendi singulis.
                        Sea
                        ocurreret principes
                        ne.<br/>
                    </article>
                    <p style={{textAlign: 'left'}}>
                        <h6>Neurology</h6>
                        <Progress percent={95}/>
                    </p>
                    <p style={{textAlign: 'left'}}>
                        <h6>Dentistry</h6>
                        <Progress percent={80}/>
                    </p>
                    <p style={{textAlign: 'left'}}>
                        <h6>Radiology</h6>
                        <Progress percent={88}/>
                    </p>
                    <p style={{textAlign: 'left'}}>
                        <h6>Cardiology</h6>
                        <Progress percent={82}/>
                    </p>
                </Col>
                <Col span={12}>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-Fdo_HT3X80"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={false}></iframe>
                    </div>
                </Col>
            </Row>
        </>
    )
        ;
};

export default Home;
