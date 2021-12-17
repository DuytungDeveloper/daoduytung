import Header from './header';
import React, { ReactNode } from 'react';
import Head from 'next/head'
import router, { useRouter, Router } from 'next/router'
import { NextSeo } from 'next-seo';
import Script from 'next/script'
import '../../../styles/resumeLayout.module.css';
// import '../../../styles/resumeLayout_light.module.css';
interface WithRouterProps {
    children?: ReactNode,
    title?: string
    description?: string
}

interface MyComponentProps extends WithRouterProps { }
class ResumeDefault extends React.Component<MyComponentProps, { style: String }> {
    constructor(props: any) {
        super(props);
        // console.log(props);
        this.state = {
            style: "dark"
        }
        this.setStyle = this.setStyle.bind(this);
    }
    setStyle(temp: String) {
        this.setState({
            style: temp
        })
    }
    componentDidMount() {
        // let abc = router.locale;
        // console.log(abc);
    }
    render() {
        return (
            <>
                <NextSeo title={this.props.title} description={this.props.description} openGraph={{ title: this.props.title, description: this.props.description }} />
                <Head>
                    {/* <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css"
                        rel="stylesheet"
                    /> */}
                    <link rel="stylesheet" href="/assets/css/reset.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/animations.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/perfect-scrollbar.css" type="text/css" />
                    {/* <link rel="stylesheet" href="/assets/css/owl.carousel.css" type ="text/css" /> */}
                    <link rel="stylesheet" href="/assets/css/magnific-popup.css" type="text/css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>


                    {/* <link rel="stylesheet" href="/assets/css/main_light.css" type="text/css" /> */}
                    <link rel="stylesheet" href={this.state.style == "light" ? "/assets/css/main_light.css" : "/assets/css/main.css"} type="text/css" />


                </Head>
                <div className="page">
                    <div className="page-content">

                        <Header style={this.state.style} setStyle={this.setStyle} />

                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* 
                        <div className="lmpixels-arrows-nav">
                            <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                            <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
                        </div> */}

                        <div className="content-area">
                            <div className="animated-sections">
                                {this.props.children}

                            </div>
                        </div>

                    </div>
                </div>


                {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-T187WL629K" async defer></Script> */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=UA-215588434-1" async defer></Script>
                {/* <Script src="https://www.google.com/recaptcha/api.js" async defer></Script> */}
                <Script src="/assets/js/jquery-2.1.3.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/modernizr.custom.js" strategy={'beforeInteractive'}  ></Script>
                <Script src="/assets/js/animating.js" strategy={'beforeInteractive'} ></Script>


                <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/perfect-scrollbar.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/jquery.shuffle.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/masonry.pkgd.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/owl.carousel.min.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/jquery.magnific-popup.min.js" strategy={'beforeInteractive'}  ></Script>
                <Script src="/assets/js/validator.js" strategy={'beforeInteractive'} ></Script>
                <Script src="/assets/js/main.js" strategy={'beforeInteractive'} ></Script>

            </>
        );
    }
}


export default ResumeDefault;