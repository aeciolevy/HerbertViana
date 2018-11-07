import React from 'react';
import DivFlex from '../styled/DivFlex';
import { H3Title } from '../styled/Typography';
import ufcg from '../../imgs/UFCG_Vector.png';

const UniversityIcons = () => {
    return(
        <DivFlex style={{ margin: '0 0 0 auto'}} width="80%" justify="space-evenly">
            <DivFlex flow="column">
                <H3Title style={{ marginBotton: '0'}}> UFCG </H3Title>
                <img alt="test" src={ufcg} style={{transform: 'scale(0.7)'}}/>
                <H3Title style={{ marginBotton: '0' }}> UFCG 2006</H3Title>
            </DivFlex>
            <DivFlex flow="column">
                <H3Title> UFCG </H3Title>
                <img alt="test" src={ufcg} />
            </DivFlex>
            <DivFlex flow="column">
                <H3Title> UFCG </H3Title>
                <img alt="test" src={ufcg} />
            </DivFlex>
        </DivFlex>
    );
};

export default UniversityIcons;
