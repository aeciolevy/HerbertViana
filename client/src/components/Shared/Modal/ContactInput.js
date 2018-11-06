import React from 'react';
import Button from '../../styled/Button';
import Input from '../../styled/Input';
import DivFlex from '../../styled/DivFlex';

const ContactInput = () => (
    <DivFlex flow="row"  width="90%">
        <Input placeholder="Informe seu email e receba seu e-book"
            style={{
                border: '0.5px solid orange',
                minWidth: '20rem',
                fontSize: '0.75rem',
                textAlign: 'center',
                flex: 1,
            }}
        />
        <Button style={{
            margin: '0',
            lineHeight: '3.5rem',
            minWidth: '7rem',
            fontSize: '1.4rem'
        }}
        bgColor="orange" hoverColor="darkOrange"
        >
            Enviar
        </Button>
    </DivFlex>
);

export default ContactInput;
