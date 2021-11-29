import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from "next/router";
import { useTranslation, Trans } from 'react-i18next';
const lngs: any = {
    en: { nativeName: 'English' },
    vi: { nativeName: 'Việt' }
};


export default function Header(props: any) {
    const { t, i18n } = useTranslation();

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
    let { locale, locales, asPath, defaultLocale } = router;
    let allRouter = [];
    for (let i = 0; i < defaultMenu.length; i++) {
        const menu = defaultMenu[i];
        allRouter.push(
            <li className={router.pathname == menu.href ? "active" : ""} key={i}>
                {/* <Link href={locale == defaultLocale ? menu.href : locale + menu.href} locale={false}> */}
                <Link href={menu.href} locale={locale}>
                    {/* <Link href={menu.href} locale="en"> */}
                    <a className={router.pathname == menu.href ? "nav-anim active" : "nav-anim"} hrefLang={`${locale}/${menu.href}`} >
                        <span className={menu.iconClass}></span>
                        <span className="link-text">{menu.name}</span>
                    </a>
                </Link>

            </li >
        );
    }
    return (
        <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
                <div className="header-photo">
                    <img src="/assets/img/main_photo.jpg" alt="Đào Duy Tùng Software Engineer, dao duy tung, duy tung, Web Developer, Developer" loading={'lazy'} />
                </div>
                <div className="header-titles">
                    <h1>Đào Duy Tùng</h1>
                    <h4>Web Developer</h4>
                </div>
            </div>

            <ul className="main-menu">
                {allRouter}
                {locale}

                {Object.keys(lngs).map((lng: any) => (
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng, (err, t) => {
                        router.locale = lng;
                    })}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
                {/* <li className="">
                    <Link href="" locale={locale}>
                        <a className={"nav-anim"}>
                            <span className="menu-icon lnr lnr-briefcase"></span>
                            <span className="link-text">Chọn ngôn ngữ</span>
                        </a>
                    </Link>

                </li> */}
            </ul>

            <div className="social-links">
                <ul>
                    <li><a href="https://www.linkedin.com/in/%C4%91%C3%A0o-duy-t%C3%B9ng-a09311208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT9PMkPjoTP6qi4mej3%2Beiw%3D%3D" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    {/* <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li> */}
                    <li><a href="https://zalo.me/0586571621" target="_blank" rel="noreferrer"><i className="fas fa-phone"></i></a></li>
                    <li><a href="https://join.skype.com/invite/nAq8QthHd63t" target="_blank" rel="noreferrer"><i className="fab fa-skype"></i></a></li>

                </ul>
            </div>

            <div className="header-buttons">
                <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
            </div>

            <div className="copyrights">© {(new Date).getFullYear()} All rights reserved.</div>
        </header>
    );
}