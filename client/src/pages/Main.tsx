import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';

import MainImg from '../components/main/MainImg';
import Content from '../components/main/Content';

export default function Main() {
    // 1. 회원가입 url에서 user 정보 가져오기
    const curPath: string = window.location.href;
    const urlParams: any = new URLSearchParams(curPath);

    const uToken: string = urlParams.get('token');

    // 2. 쿠키 굽기
    let myCookie = new Cookies();
    if (uToken) {
        myCookie.set('isUser', uToken);
    }

    console.log('isUser', myCookie.get('isUser'));
    const cookies = new Cookies();

    // url 주소 재설정
    // const urlStr: string = document.location.href;
    // const newUrlStr: string = urlStr.split('?')[0];
    // // console.log('newUrlStr', newUrlStr);

    // const nvg = useNavigate();
    // console.log(cookies.get('isUser'));
    // cookies.get('isUser') ? redirect(newUrlStr) : nvg(0);

    return (
        <div className="section">
            {/* <MainImg /> */}
            <Content />
        </div>
    );
}
