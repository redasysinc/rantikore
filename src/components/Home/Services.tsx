// @ts-nocheck
import React from "react"
import {Col, Row, Progress} from 'antd'

export default function Services():React.FC {
    return <Col span={10}>
        <h2>
            <span>QUALITY MEDICAL SERVICES</span> MAKE OUR PATIENTS HAPPY
        </h2>
        <article style={{color: "#000"}}>
            Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum copiosae
            argumentum
            has. Latine
            propriae quo no, unum ridens expetenda id sit, at usu eius eligendi singulis.
            Sea
            ocurreret principes
            ne.<br/>
        </article>
        <Row style={{textAlign: "left", marginTop: "20px"}}>
            <h6>Neurology</h6>
            <Progress percent={95}/>
        </Row>
        <Row style={{textAlign: "left", marginTop: "10px"}}>
            <h6>Dentistry</h6>
            <Progress percent={80}/>
        </Row>
        <Row style={{textAlign: "left", marginTop: "10px"}}>
            <h6>Radiology</h6>
            <Progress percent={88}/>
        </Row>
        <Row style={{textAlign: "left", marginTop: "10px"}}>
            <h6>Cardiology</h6>
            <Progress percent={82}/>
        </Row>
    </Col>;
}
