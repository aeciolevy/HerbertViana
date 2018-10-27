import React, { lazy } from 'react';
import colors from '../styled/colors';
import DivFlex from '../styled/DivFlex';
import {H3Title, BookDescription} from '../styled/Typography';
// Book Images
import pcm from '../../imgs/pcm.png';
import pcmPlaceHolder from '../../imgs/pcm-placeHolder.png';
import lideranca from '../../imgs/lideranca.png';
import liderancaPlaceHolder from '../../imgs/lideranca-placeholder-8.png';
import licoes from '../../imgs/licoes.png';
import licoesPlaceHolder from '../../imgs/licoes-placeHolder.png';
import fatores from '../../imgs/fatores.png';
import fatoresPlaceHolder from '../../imgs/fatores-PlaceHolder.png';

const LazyLoadingImage = lazy(() => import(/* webpackChunkName: "LazyLoadingImage" */'../Shared/LazyLoadingImage'));

const BookItem = React.memo(function BookItem(props) {
    return (
        <DivFlex flow="row wrap" justify="space-evenly">
            <div style={{ flexShrink: '1' }}>
                <H3Title>
                    Lições preliminares sobre custos industriais
                </H3Title>
                <LazyLoadingImage img={licoes} imgPlaceHolder={licoesPlaceHolder} width={300} height={434} />
                <BookDescription>
                    O objetivo do livro é apresentar conceitos e métodos dos custos industriais,
                    além de fazer com que o leitor seja capaz de controlar e planejar os custos da
                    empresa, avaliar a performance dos processos, 
                    atender às exigências legais e formular estratégias de longo prazo.
                </BookDescription>
            </div>
            <div style={{ flexShrink: '1' }}>
                <H3Title>
                    Planejamento e Controle da Manutenção
                </H3Title>
                <LazyLoadingImage img={pcm} imgPlaceHolder={pcmPlaceHolder} width={300} height={434} />
                <BookDescription> 
                    No livro são abordados aspectos como a evolução da manutenção; 
                    a organização básica de uma área de manutenção, suas identificações e, principalmente, 
                    seus fluxos de informação; os cadastros necessários para uma boa intervenção mantenedora; 
                    as qualificações mínimas indispensáveis àqueles que desejam atuar na área; 
                    e a forma como deve ser organizada, pensada e executada a ação 
                    preventiva nos equipamentos industriais. 
                </BookDescription>
            </div>
            <div style={{ flexShrink: '1' }}>
                <H3Title>
                    Fatores de sucesso na gestão de manutenção de ativos
                </H3Title>
                <LazyLoadingImage img={fatores} imgPlaceHolder={fatoresPlaceHolder} width={300} height={434} />
                <BookDescription>
                    O estudo busca explorar tal campo de conhecimento, 
                    tendo como local de estudos onde se materializa as ações: 
                    as empresas produtoras. Através da pesquisa observa-se os 
                    diversos fatores que influenciam o sucesso da gestão de 
                    manutenção de ativo no ambiente produtivo, 
                    organizando-os e qualificando-os em termos de relevância, 
                    de uma forma a fornecer ao leitor uma visão clara de quais 
                    são e como os mesmos podem ser processados em um caso prático.
                    
                    Discute-se também os indicadores capazes de representar os 
                    fatores de sucesso, complementando, assim, o 
                    roteiro processual necessário para uma adequada aplicação dos 
                    estudos apresentados no livro em uma realidade fabril.
                </BookDescription>
            </div>
            <div style={{ flexShrink: '1' }}>
                <H3Title>
                    7000 dias de liderança
                </H3Title>
                <LazyLoadingImage img={lideranca} imgPlaceHolder={liderancaPlaceHolder} width={300} height={434} />
                <BookDescription>
                    De forma direta e sem rodeios, 
                    o autor reúne em catorze capítulos os 
                    assuntos mais impactantes na vida de um líder e 
                    gestor frente aos desafios diários que enfrenta, 
                    sejam técnicos, sejam humanos. Assim, mais do que 
                    aprender sobre o que é estar à frente de uma equipe, o 
                    leitor é levado a refletir sobre seu dia a dia no trabalho 
                    de modo a traçar seu próprio roteiro de como se tornar 
                    um bom líder e de como alcançar a 
                    plenitude não só como profissional, 
                    mas também como ser humano.
                </BookDescription>
            </div>
        </DivFlex>
    );
});

export default BookItem;
