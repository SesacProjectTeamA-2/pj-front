import { createButton } from 'react-social-login-buttons';

const config_tester = {
    text: 'Tester 계정으로 로그인',
    style: {
        background: '#000000',
        borderRadius: '12px',
        color: '#ffffff',
    },
};

const TesterLoginBtn = createButton(config_tester);
export default TesterLoginBtn;
