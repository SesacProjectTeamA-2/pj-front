import { ReactComponent as googleSvg } from './google.svg';

import { createButton } from 'react-social-login-buttons';
import { createSvgIcon } from 'react-social-login-buttons';

const config_google = {
    text: 'Google 계정으로 로그인',
    style: {
        background: '#FFF',
        borderRadius: '12px',
        color: '#000000',
        fontSize: '1rem',
        fontWeight: 'bold',
        wordWrap: 'breakWord',
    },
    icon: createSvgIcon(googleSvg),
};

const GoogleLoginBtn = createButton(config_google);
export default GoogleLoginBtn;
