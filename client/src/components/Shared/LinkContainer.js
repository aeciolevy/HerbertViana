import React from 'react';
import DivFlex from '../styled/DivFlex';
import { LinkText } from './LinkText';
import ButtonCTA from '../styled/ButtonCTA';
import { LinkTextMobile } from './LinkTextMobile';

const LinkContainer = (props) => {  
    return (
        <DivFlex width="24.125rem" justify="space-evenly" alignItems="center" style={{ alignSelf: 'flex-start', marginLeft: 'auto' }}>
            <LinkText to="/" > Início </LinkText>
            <LinkText to="/aboutme" > Sobre mim </LinkText>
            <p style={{margin: 0}} className="link" > E-book </p>
            <ButtonCTA> Entre em contato</ButtonCTA>
            <LinkTextMobile to="/"> Início </LinkTextMobile>
            <LinkTextMobile to="/aboutme"> Sobre mim </LinkTextMobile>
            <LinkTextMobile to="/books"> Livros </LinkTextMobile>
            <LinkTextMobile to="/contact"> Contato </LinkTextMobile>
        </DivFlex>
    );
};

export default LinkContainer;
