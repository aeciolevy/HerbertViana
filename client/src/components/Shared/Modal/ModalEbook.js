import React from 'react';
import DivFlex from '../../styled/DivFlex';
import ReactModal from './ReactModal';

import EbookInput from './EbookInput';
import EbookInfo from './EbookInfo';

const ModalEbook = ({ onClose}) => {
    return(
        <ReactModal isOpen={true} onClose={onClose}>
            <DivFlex style={{ minWidth: 400, minHeight: 200 }} flow="column" padding="1rem 0">
                <EbookInfo />
                <EbookInput />                
            </DivFlex>
        </ReactModal>
        
    );
};

export default ModalEbook;
