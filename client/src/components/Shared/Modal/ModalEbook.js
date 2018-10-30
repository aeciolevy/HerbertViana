import React from 'react';
import DivFlex from '../../styled/DivFlex';
import ReactModal from './ReactModal';
import ebook from '../../../imgs/e-book.png';
import Button from '../../styled/Button';
import color from '../../styled/colors';

const ModalEbook = ({ onClose}) => {
    return(
        <ReactModal isOpen={true} onClose={onClose}>
            <DivFlex style={{ minWidth: 400, minHeight: 300 }} flow="column">
                <DivFlex flow="row">
                    <div style={{ backgroundImage: `url(${ebook})`, width: '25rem', 
                        marginTop: '-12.5rem', height: '25rem', backgroundSize: 'contain'}}>
                    </div>
                    
                    <div style={{ width: "20.125rem", zIndex: 2 }}>
                        <p style={{ lineHeight: '2rem', color: `${color.textNormal}` }}>
                            Neste e-book, o professor Herbert Viana,
                            apresenta um resumo  do sistema de gestão CIT/CSM,
                            para administração da Função Manutenção,
                            apresentando ao leitor os seis processos que o formam.
                        </p>
                    </div>
                </DivFlex>
                <DivFlex>
                    <Button>
                        test
                    </Button>
                </DivFlex>
            </DivFlex>
        </ReactModal>
        
    );
};

export default ModalEbook;
