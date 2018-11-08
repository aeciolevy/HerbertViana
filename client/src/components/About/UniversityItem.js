import React from 'react';
import DivFlex from '../styled/DivFlex';
import { H3Title } from '../styled/Typography';

const UniversityItem = React.memo(function UniversityItem({ university }) {
    return(
        <DivFlex flow="column">
            <H3Title style={{ margin: '0' }}> {university.name} </H3Title>
            <img alt="test" src={university.img} style={{ transform: 'scale(0.7)' }} />
            <H3Title style={{ margin: '0' }}> {university.title} </H3Title>
            <H3Title style={{ margin: '0' }}> {university.year} </H3Title>
        </DivFlex>
    );
});

export default UniversityItem;
