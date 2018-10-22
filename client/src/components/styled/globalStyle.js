import { injectGlobal } from 'styled-components';
import Montserrat from '../../fonts/Montserrat-Regular.ttf';
import Roboto from '../../fonts/Roboto-Regular.ttf';

injectGlobal` 
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
    }
`

