// @ts-nocheck
import React, {FunctionComponent} from 'react';
import {Row, Col, Progress, Avatar} from 'antd'
import styles from './home.module.css'


export default function Disciplines() {
    return <>
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
    </>;
}
