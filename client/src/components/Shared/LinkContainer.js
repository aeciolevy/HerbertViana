import React from 'react';
import DivFlex from '../styled/DivFlex';
import { LinkText } from './LinkText';
import ButtonCTA from '../styled/ButtonCTA';
import { LinkTextMobile } from './LinkTextMobile';
import { ModalConsumer } from '../Shared/Modal/ModalContext';
import ModalEbook from './Modal/ModalEbook';
import ModalContact from './Modal/ModalContact';

const LinkContainer = (props) => {  
    return (
        <DivFlex width="24.125rem" justify="space-evenly" alignItems="center" style={{ alignSelf: 'flex-start', marginLeft: 'auto' }}>
            <LinkText to="/" > Início </LinkText>
            <LinkText to="/aboutme" > Sobre mim </LinkText>
            <ModalConsumer>
                {( {showModal} ) => (
                    <>
                        <p style={{margin: 0}} className="link" 
                            onClick={() => showModal( ModalEbook )}> 
                        E-book </p>
                        <ButtonCTA
                            onClick={() => showModal( ModalContact )}
                        > 
                            Entre em contato
                        </ButtonCTA>
                    </>
                )}
            </ModalConsumer>
            <LinkTextMobile to="/"> Início </LinkTextMobile>
            <LinkTextMobile to="/aboutme"> Sobre mim </LinkTextMobile>
            <LinkTextMobile to="/books"> Livros </LinkTextMobile>
            <LinkTextMobile to="/contact"> Contato </LinkTextMobile>
        </DivFlex>
    );
};

export default LinkContainer;
