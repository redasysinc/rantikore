import React, {FunctionComponent} from 'react';
import {consecutiveUniqueRandom} from 'unique-random'
import {Card, Layout, Image, Row, Col} from 'antd'
import useDocStore, {Docstate} from "../store/doc-store.ts";

const {Content, Sider} = Layout;

interface OwnProps {
}

type Props = OwnProps;

const styles = {
    cardStyle:{
        backgroundColor: '#7a2feb',
    },
    layoutStyle: {
        backgroundColor: '#2f54eb',
        color: 'whitesmoke',
        padding: '20px 10px 20px 10px',
    }
}

const Provider: React.FC = (props) => {
    const {selected}: Docstate = useDocStore()
    const random = consecutiveUniqueRandom(1, 9);

    return (
        <Card

            hoverable={true}
            title={`${selected.Provider_Name_Prefix_Text} ${selected.Provider_First_Name} ${selected.ProviderLastName_Legal_Name}`}>
            <Content >
                <Layout style={styles.layoutStyle}>
                    <Sider style={{height: '100%', padding:'0px 20px 0px 10px', margin: 'auto'}}>
                        <Image preview={false} src={`./images/doc${random()}.JPEG`}/>
                    </Sider>
                    <Row gutter={8}>
                        {Object.keys(selected).filter((k, j) => (selected[k].length && typeof selected[k] !== 'object' && j < 30)).map((prop, j) => (
                            <Col span={6}>
                                <p>{prop.split('_').slice(prop.split('_').length - 2).join(' ')}: {selected[prop]}</p>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Content>
        </Card>
    )


};

export default Provider;
