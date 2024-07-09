// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Progress, Avatar} from 'antd'


export default function Reviews() {
    return <Row gutter={18}>
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
    </Row>;
}
