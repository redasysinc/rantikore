// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Progress, Avatar} from 'antd'
import Services from './Services'
import styles from './home.module.css'
import WhyUs from './WhyUs'

export default function Features() {
    return <>
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
    </>;
}
