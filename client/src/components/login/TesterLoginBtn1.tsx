import { ReactComponent as logoSvg } from './logo.svg';

import { createButton } from 'react-social-login-buttons';
import { createSvgIcon } from 'react-social-login-buttons';

const config_tester = {
    text: '테스터 로그인 1',
    style: {
        background: '#ed8d8d',
        borderRadius: '12px',
        color: '#ffffff',
        fontSize: '1rem',
        fontWeight: 'bold',
        wordWrap: 'breakWord',
    },
    icon: createSvgIcon(logoSvg),
    className: 'testerLogin-btn',
};

const TesterLoginBtn = createButton(config_tester);
export default TesterLoginBtn;
