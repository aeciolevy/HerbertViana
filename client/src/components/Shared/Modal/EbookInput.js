import React from 'react';
import Button from '../../styled/Button';
import Input from '../../styled/Input';
import DivFlex from '../../styled/DivFlex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EbookInput = () => (
    <DivFlex flow="row" padding="0 5rem">
        <Input placeholder="Informe seu email e receba seu e-book"
            style={{
                border: '0.5px solid orange',
                minWidth: '20rem',
                fontSize: '0.75rem',
                textAlign: 'center',
            }}
        />
        <Button style={{
            margin: '0',
            lineHeight: '3.5rem',
            minWidth: '16rem',
            fontSize: '1.4rem'
        }}
        bgColor="orange" hoverColor="darkOrange"
        >
            <FontAwesomeIcon icon={['fas', 'file-download']} size="2x"
                style={{ margin: '0 1rem' }} transform="down-2"
            />
            Baixe seu E-Book
        </Button>
    </DivFlex>
);

export default EbookInput;
