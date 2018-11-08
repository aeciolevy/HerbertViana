import React from 'react';
import DivFlex from '../styled/DivFlex';
import ufpb from '../../imgs/ufpb.png';
import ufprgs from '../../imgs/ufgrs.png';
import ufcg from '../../imgs/ufcg.png';
import UniversityItem from './UniversityItem';

const university = [
    { name: 'UFCG', year: '2006', title: 'Bachalerado', img: ufcg},
    { name: 'UFPB', year: '2008', title: 'Mestrado', img: ufpb},
    { name: 'UFCG', year: '2013', title: 'Doutorado', img: ufprgs},
];

const UniversityIcons = () => {
    return(
        <DivFlex style={{ margin: '0 25%'}} width="100%" justify="space-around">
            {university.map(el => <UniversityItem key={el.year} university={el} />)}
        </DivFlex>
    );
};

export default UniversityIcons;
