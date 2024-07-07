// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Progress, Avatar} from 'antd'
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
            <div style={{width: '95%', display: "block", margin: '25px auto'}}>
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
                        <Row style={{textAlign: 'left', marginTop: '20px'}}>
                            <h6>Neurology</h6>
                            <Progress percent={95}/>
                        </Row>
                        <Row style={{textAlign: 'left', marginTop: '10px'}}>
                            <h6>Dentistry</h6>
                            <Progress percent={80}/>
                        </Row>
                        <Row style={{textAlign: 'left', marginTop: '10px'}}>
                            <h6>Radiology</h6>
                            <Progress percent={88}/>
                        </Row>
                        <Row style={{textAlign: 'left', marginTop: '10px'}}>
                            <h6>Cardiology</h6>
                            <Progress percent={82}/>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-Fdo_HT3X80"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen={false}></iframe>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <div>
                            <h2>WHY CHOOSE US</h2>
                            <h3>We have some special crieteria that will help you</h3>
                        </div>
                        <div>
                            <i aria-hidden="true"></i>
                        </div>
                        <div>
                            <h4>QUICK RESPONSE</h4>
                            <p>
                                Iisque persius ne sit, simul zril vix eu. Qui ne iusto epicuri
                                suscipiantur, sit ne probo adhuc.
                                Liber
                                verterem interpretaris nam et, ea pro solum expetendis.
                            </p>
                        </div>
                        <div>
                            <i aria-hidden="true"></i>
                        </div>
                        <div>
                            <h4>100% SATISFACTION</h4>
                            <p>
                                Duo luptatum delicata evertitur ad. Usu te quaerendum definitiones, ne
                                mundi volutpat duo, in
                                dissentias temporibus pri. Duo ferri dicant definitionem te.
                            </p>
                        </div>
                        <div>
                            <i aria-hidden="true"></i>
                        </div>
                        <div>
                            <h4>QUALITY SERVICE</h4>
                            <p>
                                Amet dolor oratio ex has, stet repudiare definiebas vim ne. Id probo
                                facilisis usu, pri aliquam
                                omnesque cu. Vide assentior id qui, quando possim eos.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={18}>
                    <Col span={24}>
                        <div>
                            <h2>SPECIAL FEATURES</h2>
                            <h3>We offer some awesome features that will help you</h3>
                        </div>
                    </Col>
                </Row>
                <Row gutter={18}>
                    <Col span={8}>
                        <div>
                            <h4>Planned Space Design</h4>
                            <p>
                                Liber utroque vim an, ne his brute vivendo, est fabulas consetetur
                                appellantur an in dolore.
                            </p>
                        </div>
                        <div>
                            <h4>Good Medical Facilities</h4>
                            <p>
                                Vix tale noluisse voluptua ad, ne brute altera democritum cum. Omnes
                                ornatus qui et, te aeterno.
                            </p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <h4>Best Ambulance Service</h4>
                            <p>
                                Mei ut errem legimus periculis, eos liber epicurei necessitatibus eu,
                                facilisi postulant vel no.
                            </p>
                        </div>

                        <div>
                            <h4>Computerized Platform</h4>
                            <p>
                                Ex vix alienum sadipscing, quod melius philosophia id has. Ad qui quem
                                reprimique, quo possit.
                            </p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <h4>Reduced Supervision</h4>
                            <p>
                                Vis constituto complectitur an, modo falli eirmod ea has. Ex vis
                                indoctum scriptorem appellantur.
                            </p>
                        </div>
                        <div>
                            <h4>Modern Technology</h4>
                            <p>
                                Ancillae interpretaris ea has. Id amet impedit qui, eripuit mnesarchum
                                percipitur in eam.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={18}>
                    <Col span={24}>
                        <h2 className={styles.centered}>OUR SERVICES</h2>
                        <h3>We are always here to offer you the highest quality services</h3>
                    </Col>
                </Row>
                <Row gutter={18}>
                    <Col span={8}>
                        <div className="services-text">
                            <div className={styles.servicesPhoto}>
                                <h1>Newborn Care</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                                copiosae argum entum has. Latine
                                propriae quo no unum.
                            </p>
                        </div>
                        <div className="services-text">
                            <div className={styles.mothercare}>
                                <h1>Mother Care</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                                copiosae argum entum has. Latine
                                propriae quo no unum.
                            </p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="services-text">
                            <div className={styles.criticaltreatement}>
                                <h1>Critical Treatment</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                                copiosae argum entum has. Latine
                                propriae quo no unum.
                            </p>
                        </div>
                        <div className="services-text">
                            <div className={styles.lab}>
                                <h1>Modern Laboratory</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                                copiosae argum entum has. Latine
                                propriae quo no unum.
                            </p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="services-text">
                            <div className={styles.test}>
                                <h1>All Major Tests</h1>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                                copiosae argum entum has. Latine
                                propriae quo no unum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={18}>
                    <Col span={6}>
                        <div className="item">
                            <div className="shadow-effect">
                                {/*<Avatar className="img-circle" src="../../../public/images/pat1.JPEG"/>*/}
                                <p>Dramatically maintain clicks-and-mortar solutions without functional
                                    solutions. Completely
                                    synergize resource taxing relationships via premier niche markets.
                                    Professionally cultivate.
                                </p>
                            </div>
                            <div className="testimonial-name">EMILIANO AQUILANI</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="item">
                            <div className="shadow-effect">
                                {/*<Avatar className="img-circle" src="../../../public/images/pat2.JPEG" alt="user2"/>*/}
                                <p>Dramatically maintain clicks-and-mortar solutions without functional
                                    solutions. Completely
                                    synergize resource taxing relationships via premier niche markets.
                                    Professionally cultivate.
                                </p>
                            </div>
                            <div className="testimonial-name">ANNA ITURBE</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="item">
                            <div className="shadow-effect">
                                {/*<Avatar className="img-circle" src="../../../public/images/pat3.JPEG" alt="user3"/>*/}
                                <p>Dramatically maintain clicks-and-mortar solutions without functional
                                    solutions. Completely
                                    synergize resource taxing relationships via premier niche markets.
                                    Professionally cultivate.
                                </p>
                            </div>
                            <div className="testimonial-name">LARA ATKINSON</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="item">
                            <div className="shadow-effect">
                                {/*<Avatar className="img-circle" src="../../../public/images/doc1.JPEG" alt="user4"/>*/}
                                <p>Dramatically maintain clicks-and-mortar solutions without functional
                                    solutions. Completely
                                    synergize resource taxing relationships via premier niche markets.
                                    Professionally cultivate.
                                </p>
                            </div>
                            <div className="testimonial-name">IAN OWEN</div>

                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
};

export default Home;
