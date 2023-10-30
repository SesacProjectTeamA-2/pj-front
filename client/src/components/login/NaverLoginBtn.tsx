import { ReactComponent as naverSvg } from './naver.svg';

import { createButton } from 'react-social-login-buttons';
import { createSvgIcon } from 'react-social-login-buttons';

const config_naver = {
    text: '네이버 로그인',
    style: { background: '#02c75a', borderRadius: '12px' },
    icon: createSvgIcon(naverSvg),
};

const NaverLoginBtn = createButton(config_naver);
export default NaverLoginBtn;
