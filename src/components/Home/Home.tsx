// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Carousel} from 'antd'

import Services from './Services'
import styles from './home.module.css'
import WhyUs from './WhyUs'
import Features from './Features'
import Disciplines from './Disciplines'
import Reviews from './Reviews'

const Home: React.FC = (props) => {

    return (
        <>
            <div className={styles.bannerSlider}>
                <div className={styles.bannerContent}>
                    <div>
                        {/*<h1 id="typeit"> WELCOME TO YOUR PORTAL</h1>*/}
                    </div>
                </div>
            </div>

            <div style={{width: '95%', display: "block", margin: '25px auto'}}>
                <Carousel autoplay>
                    <div>
                        <Row gutter={16}>
                            <Services/>
                            <Col span={12}>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Fdo_HT3X80"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen={false}></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <WhyUs/>
                    </div>
                    <div>
                        <Features/>
                        <Disciplines/>
                    </div>
                    <div>
                        <Reviews/>
                    </div>
                </Carousel>
            </div>

        </>
    )
};

export default Home;
