import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import useDocStore, {Docstate} from "../store/doc-store.ts";
import {Card, Row, Col, Button} from 'antd'



interface OwnProps {
}

type Props = OwnProps;

const Providers: React.FC<Props> = (props): ReactElement => {
    const show = [false, false, false]
    const [vis, setVis] = useState(show);
    const {providers, setSelected, selected, getProviders}: Docstate = useDocStore((state) => ({
        providers: state.providers,
        setSelected: state.setSelected,
        selected: state.selected,
        getProviders: state.getProviders,
    }))

    useEffect(() => {
        getProviders()
    }, []);

    return (
        <>
            <h3>Here are a few Healthcare Providers that may interest you:</h3>
            <Row>
                {providers && providers.length && providers.filter((x, i) => (i < 9)).map((x, i) => (
                    <Col span={8} key={i}>
                        <Card
                              title={`${x.Provider_Name_Prefix_Text} ${x.Provider_First_Name} ${x.ProviderLastName_Legal_Name}`}>
                            <p><Button type={'primary'} onClick={() => {
                                show[i] = !vis[i];
                                console.log(i, show)
                                setVis(show);
                            }}>Show details</Button></p>
                            {vis[i] &&
                                Object.keys(x).filter((k, j) => (x[k].length && typeof x[k] !== 'object' && j < 30)).map((prop, j) => (
                                    <p key={j}>{prop.split('_').slice(prop.split('_').length - 2).join(' ')}: {x[prop]}</p>
                                ))

                            }
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}
export default Providers;
