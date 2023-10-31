import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';
import '../../styles/scss/pages/management/managementsidebar.scss';

export default function SidebarManagement() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <ul className=" menu align-center expanded text-center SMN_effect-42">
                    <Link to="/management/users">
                        <li className="">
                            <input type="radio" style={{ display: 'none' }} />
                            <span data-hover="회원 관리"> 회원 관리</span>
                        </li>
                    </Link>
                    <Link to="/management/groups">
                        <li className="">
                            <span data-hover="그룹 관리">그룹 관리</span>
                        </li>
                    </Link>
                    <Link to="/management/reports">
                        <li className="">
                            <span data-hover="신고 내역">신고 내역</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

{
    /* <div class="back color-2">
<div class="row columns">
  <h3>Effect 42</h3>
  <ul class="menu align-center expanded text-center SMN_effect-42">
    <li><a href=""><span data-hover="Home">Home</span></a></li>
    <li><a href=""><span data-hover="About">About</span></a></li>
    <li><a href=""><span data-hover="Gallery">Gallery</span></a></li>
    <li><a href=""><span data-hover="Notes">Notes</span></a></li>
    <li><a href=""><span data-hover="Contact">Contact</span></a></li>
  </ul>
</div>
</div> */
}
