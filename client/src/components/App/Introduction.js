import React from 'react';

const Introduction = () => {
    return (
        <div style={{ marginTop: '6rem'}}>
            <p style={{ fontFamily: 'Roboto', fontSize: '1.15rem', color: 'white', margin: '0'}}> 
                Oi, eu sou o 
            </p>
            <p style={{ color: 'white', fontFamily: 'Roboto', fontSize: '3.0rem', margin: '0'}}>
                Herbert Viana
            </p>
            <p style={{ color: 'white', fontFamily: 'Roboto', fontSize: '1.15rem', margin: '0'}}>
                Professor Doutor da UFRN
            </p>
            <div style={{ width: '26.25rem', marginTop: '2rem'}}>
                <p style={{ color: 'white', fontFamily: 'Roboto', fontSize: '0.875rem', margin: '0'}}>
                    Graduado em Engenharia Mecânica pela UFCG (1997), em Direito plea UEPB (1998),
                    mestrado em Engenharia Mecânica pela UFPB (2008), Doutorado em Engenharia de
                    Produção pela UFRGS (2013), também com especializaçãom em Tecnologia Mineral
                    pela UFPA (2008) e Gestão Empresarial pela PUCCAMP (2003).
                </p>
            </div>
        </div>
    );
};

export default Introduction;
