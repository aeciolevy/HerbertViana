import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { far, faCircle, faSquare, faCheckCircle, faHeart } from '@fortawesome/free-regular-svg-icons';

const iconConfig = {
    init: function init() {
        library.add(fab, far, faFacebook, faFacebookF, faSquare, faHeart, faCheckCircle, faInstagram, faLinkedinIn, faCircle);
    },
};

export default iconConfig;
