/* tslint.disable */
// @ts-nocheck
// @ts-ignore
import React, {ReactElement, useEffect, useState} from 'react';
import useDocStore, {Docstate} from "../store/doc-store.ts";
import {Card, Row, Col, Button} from 'antd'
import Provider from "./Provider.tsx";

const Providers: React.FC = (props:any): ReactElement => {
    const [dir, setDir] = useState('')
    const {providers, setSelected, selected, getProviders}: Docstate = useDocStore((state) => ({
        providers: state.providers,
        setSelected: state.setSelected,
        selected: state.selected,
        getProviders: state.getProviders,
    }))

    useEffect(() => {
        getProviders()
    }, []);

    const handleSelection = async (npi: string) =>{
        if(selected.NPI === npi){
            setDir('fade-down')
            await setSelected(null)
            return;
        }
        setDir('fade-up')
        await setSelected(npi)
    }

    return (
        <>
            {selected.NPI && <Provider fadeDirection={dir} />}
            <div style={{textAlign: 'center'}}>
            <h3 style={{margin: '15px auto 20px auto'}}>Here are a few {selected.NPI&&'more '}Healthcare Providers that may interest you:</h3>
            </div>
                <Row>
                {providers && providers.length && providers.filter((x, i) => (i < 9)).map((x, i) => (
                    <Col span={8} key={i}>
                        <Card
                            title={`${x.Provider_Name_Prefix_Text} ${x.Provider_First_Name} ${x.ProviderLastName_Legal_Name}`}>
                            <p><Button type={'primary'} onClick={()=> {
                                handleSelection(x.NPI)
                            }}>Show details</Button></p>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}
export default Providers;
