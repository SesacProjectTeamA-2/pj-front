import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';

import MainImg from '../components/main/MainImg';
import Content from '../components/main/Content';

export default function Main() {
    // 1. 회원가입 url에서 user 정보 가져오기
    const curPath: string = window.location.href;
    const urlParams: any = new URLSearchParams(curPath);
    // console.log('params', urlParams);
    // const uEmail: string = urlParams.get('userEmail');
    // const uName: string = urlParams.get('userName');

    const uToken: string = urlParams.get('token');
    console.log(uToken);

    // 2. 쿠키 굽기
    let myCookie = new Cookies();
    if (uToken) {
        myCookie.set('isUser', uToken);
    }

    console.log('isUser', myCookie.get('isUser'));

    // useEffect(() => {
    //     window.location.reload();
    // }, [uToken]);

    return (
        <div className="section">
            <MainImg />
            <Content />
        </div>
    );
}
