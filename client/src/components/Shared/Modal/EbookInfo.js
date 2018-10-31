import React from 'react';
import DivFlex from '../../styled/DivFlex';
import ebook from '../../../imgs/e-book.png';
import logo from '../../../imgs/Logo2.png';
import Image from '../../styled/Image';
import color from '../../styled/colors';

const EbookInfo = () => (
    <DivFlex flow="row" padding="0 0 1rem 0">
        <div style={{
            backgroundImage: `url(${ebook})`, width: '25rem',
            marginTop: '-5.5rem', height: '25rem', backgroundSize: 'contain'
        }}>
        </div>
        <DivFlex flow="column" justify="center">
            <Image alt="logo-small" src={logo}
                style={{ width: '11rem', height: '7rem', alignSelf: 'center' }} />
            <div style={{ width: "20.125rem", zIndex: 2 }}>
                <p style={{ lineHeight: '2rem', color: `${color.textNormal}` }}>
                    Neste e-book, o professor Herbert Viana,
                    apresenta um resumo  do sistema de gestão CIT/CSM,
                    para administração da Função Manutenção,
                    apresentando ao leitor os seis processos que o formam.
                </p>
            </div>
        </DivFlex>
    </DivFlex>
);

export default EbookInfo;
