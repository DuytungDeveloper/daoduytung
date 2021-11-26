import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from "next/router";
export default function Header(props: any) {
    let defaultMenu = [
        {
            href: "/",
            iconClass: "menu-icon lnr lnr-home",
            name: "Trang chủ"
        },
        {
            href: "/about",
            iconClass: "menu-icon lnr lnr-user",
            name: "Thông tin"
        },
        {
            href: "/resume",
            iconClass: "menu-icon lnr lnr-graduation-hat",
            name: "Resume"
        },
        {
            href: "/portfolio",
            iconClass: "menu-icon lnr lnr-briefcase",
            name: "Hoạt động"
        },
        {
            href: "/blog",
            iconClass: "menu-icon lnr lnr-book",
            name: "Blog"
        },
        {
            href: "/contact",
            iconClass: "menu-icon lnr lnr-envelope",
            name: "Liên hệ"
        },
    ];
    const router = useRouter();
    let allRouter = [];
    for (let i = 0; i < defaultMenu.length; i++) {
        const menu = defaultMenu[i];
        allRouter.push(
            <li className={router.pathname == menu.href ? "active" : ""} key={i}>
                <Link href={menu.href}>
                    <a className={router.pathname == menu.href ? "nav-anim active" : "nav-anim"}>
                        <span className={menu.iconClass}></span>
                        <span className="link-text">{menu.name}</span>
                    </a>
                </Link>

            </li>
        );
    }
    return (
        <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
                <div className="header-photo">
                    <img src="/assets/img/main_photo.jpg" alt="Đào Duy Tùng Software Engineer, dao duy tung, duy tung, Web Developer, Developer" loading={'lazy'}/>
                </div>
                <div className="header-titles">
                    <h1>Đào Duy Tùng</h1>
                    <h4>Web Developer</h4>
                </div>
            </div>

            <ul className="main-menu">
                {allRouter}
            </ul>

            <div className="social-links">
                <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>

            <div className="header-buttons">
                <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
            </div>

            <div className="copyrights">© {(new Date).getFullYear()} All rights reserved.</div>
        </header>
    );
}