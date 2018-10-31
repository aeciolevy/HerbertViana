import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { far, faCircle, faSquare, faCheckCircle, faHeart, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { fas, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const iconConfig = {
    init: function init() {
        library.add(fab, fas, far, 
            faFacebook, faFacebookF, 
            faSquare, faHeart, faFilePdf, 
            faCheckCircle, faInstagram, 
            faLinkedinIn, faCircle, faFileDownload,
        );
    },
};

export default iconConfig;
