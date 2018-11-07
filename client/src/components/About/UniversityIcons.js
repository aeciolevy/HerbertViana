import React from 'react';
import DivFlex from '../styled/DivFlex';
import { H3Title } from '../styled/Typography';
import ufcg from '../../imgs/UFCG_Vector.png';

const UniversityIcons = () => {
    return(
        <DivFlex style={{ margin: '0 0 0 auto'}}>
            <DivFlex flow="column">
                {/* <H3Title> UFCG </H3Title>
                <img alt="test" src={ufcg} /> */}
            </DivFlex>
        </DivFlex>
    );
};

export default UniversityIcons;
