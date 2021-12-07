import React, { Suspense, lazy, useEffect } from 'react';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from "next/router";
import { useTranslation, Trans } from 'react-i18next';
const lngs: any = {
    en: { nativeName: 'English', iconClass: "flag-icon flag-icon-us" },
    vi: { nativeName: 'Việt Nam', iconClass: "flag-icon flag-icon-vn" }
};

const styles: any = [
    { style: "dark", iconClass: "fas fa-moon", backgroundColor: "darkorchid" },
    { style: "light", iconClass: "far fa-sun", backgroundColor: "aliceblue" },
]

export default function Header(props: any) {
    const { t, i18n } = useTranslation();

    let defaultMenu = [
        {
            href: "/",
            iconClass: "menu-icon lnr lnr-home",
            name: t("menu.home")
        },
        {
            href: "/about",
            iconClass: "menu-icon lnr lnr-user",
            name: t("menu.about")
        },
        {
            href: "/resume",
            iconClass: "menu-icon lnr lnr-graduation-hat",
            name: t("menu.resume")
        },
        {
            href: "/portfolio",
            iconClass: "menu-icon lnr lnr-briefcase",
            name: t("menu.portfolio")
        },
        {
            href: "/blog",
            iconClass: "menu-icon lnr lnr-book",
            name: t("menu.blog")
        },
        {
            href: "/contact",
            iconClass: "menu-icon lnr lnr-envelope",
            name: t("menu.contact")
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
    useEffect(() => {

    }, [])
    return (
        <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
                <div className="header-photo">
                    <img src="/assets/img/main_photo.jpg" alt="Đào Duy Tùng Software Engineer, dao duy tung, duy tung, Web Developer, Developer" loading={'lazy'} />
                </div>
                <div className="header-titles">
                    <h2>Đào Duy Tùng</h2>
                    <h4>Web Developer</h4>
                </div>
            </div>

            <ul className="main-menu">
                {allRouter}
                {/* {locale} */}
                <br />
                {Object.keys(lngs).map((lng: any) => (
                    <>
                        <button className="btn" key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', backgroundColor: router.locale === lng ? "#04b4e0" : "transparent", borderColor: router.locale === lng ? "#04b4e0" : 'transparent' }} type="submit" onClick={() => i18n.changeLanguage(lng, (err, t) => {
                            router.locale = lng;
                        })}>
                            {/* {lngs[lng].nativeName} */}
                            <i className={lngs[lng].iconClass} style={{ margin: 0 }}></i>
                            {/* <span className="flag-icon flag-icon-gr"></span> */}
                        </button>
                        <br />
                    </>
                ))}
                {styles.map((x: any, i: any) => (
                    <>
                        <button className="btn" key={i} onClick={() => {
                            if (props.setStyle) {
                                // console.log(x.style)
                                props.setStyle(x.style)
                            }
                        }} style={{ backgroundColor: x.style == props.style ? "#04b4e0" : "#4d6166" }}>
                            <i className={x.iconClass}></i>
                        </button>
                        <br />
                    </>

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
                <a href="#" target="_blank" className="btn btn-primary">
                    <Trans i18nKey="downloadCV" />
                    {/* Download CV */}

                </a>
            </div>

            <div className="copyrights">© {(new Date).getFullYear()} All rights reserved.</div>
        </header>
    );
}