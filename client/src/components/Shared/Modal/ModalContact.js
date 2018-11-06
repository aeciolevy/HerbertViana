import React from 'react';
import DivFlex from '../../styled/DivFlex';
import ReactModal from './ReactModal';
import Image from '../../styled/Image';
import logo from '../../../imgs/Logo2.png';
import EbookInput from './EbookInput';
import ContactInput from './ContactInput';

const ModalContact = ({ onClose }) => {
    return (
        <ReactModal isOpen={true} onClose={onClose}>
            <DivFlex style={{ minWidth: 600, minHeight: 200 }} flow="column" padding="1rem 0">
                <DivFlex flow="row" alignItems="center" width="90%" padding="0 2rem">
                    <p style={{ fontSize: '1.5rem', fontFamily: 'Roboto', margin: '0'}}> Entre em contato </p>
                    <Image alt="logo-small" src={logo}
                        style={{ width: '11rem', height: '7rem', alignSelf: 'center', marginLeft: 'auto' }} />
                </DivFlex>
                <DivFlex width="90%" padding="0 2rem">
                    <textarea type="textarea" style={{width: '100%'}}
                        placeholder="Escreva algo para mim" rows="3" cols="33"
                        style={{
                            border: '0.5px solid orange',
                            minWidth: '20rem',
                            minHeight: '6.25rem',
                            width: '100%',
                            fontSize: '0.75rem',
                        }}
                    />
                </DivFlex>
                <DivFlex width="100%" padding="2rem 2rem">
                    <ContactInput />
                </DivFlex>
            </DivFlex>
        </ReactModal>

    );
};

export default ModalContact;
