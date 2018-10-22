import React from 'react';
import DivFlex from '../styled/DivFlex';
import { LinkText } from './LinkText';
import ButtonCTA from '../styled/ButtonCTA';

const LinkContainer = (props) => {  
    return (
        <>
        <DivFlex width="28.125rem" justify="space-evenly" alignItems="center" style={{ alignSelf: 'flex-start', marginLeft: 'auto' }}>
            <LinkText to="/" > Início </LinkText>
            <LinkText to="/aboutme" > Sobre mim </LinkText>
            <p style={{margin: 0}} className="link" > E-book </p>
            <ButtonCTA> Entre em contato</ButtonCTA>
        </DivFlex>
        </>
    );
};

export default LinkContainer;
