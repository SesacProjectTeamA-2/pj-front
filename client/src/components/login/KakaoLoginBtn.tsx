import { ReactComponent as kakaoSvg } from './kakao.svg';

import { createButton } from 'react-social-login-buttons';
import { createSvgIcon } from 'react-social-login-buttons';

const config_kakao = {
    text: '카카오 로그인',
    style: { background: '#FEE500', borderRadius: '12px', color: '#000000' },
    icon: createSvgIcon(kakaoSvg),
    className: 'kakaoLogin-btn',
};

const KakaoLoginBtn = createButton(config_kakao);
export default KakaoLoginBtn;
