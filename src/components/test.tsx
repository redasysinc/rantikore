import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import api from "../api/api.ts";
import useDocStore from "../store/doc-store.ts";


interface OwnProps {
}

type Props = OwnProps;

const Test = () => {
    const {npiList, setSelected, selected, getProviders} = useDocStore((state) => ({
        npiList: state.npiList,
        setSelected: state.setSelected,
        selected: state.selected,
        getProviders: state.getProviders,
    }))

    useEffect(() => {
      getProviders();
    }, []);

    return (
        <>
            {npiList.map(x => (
                <div key={x}>
                    <div onClick={() => {
                        setSelected(x)
                    }}>{x}</div>
                    {selected && selected.NPI === x &&
                        <div>
                            {selected.Provider_Name_Prefix_Text}&nbsp{selected.Provider_First_Name}&nbsp{selected.Provider_Middle_Name}&nbsp
                            {selected.ProviderLastName_Legal_Name}&nbsp{selected.Provider_Name_Suffix_Text}&nbsp{selected.Provider_Credential_Text}&nbsp
                        </div>
                    }
                </div>
            ))
            }

        </>
    )
}

export default Test

