import Header from './header';
import React, { ReactNode } from 'react';
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import Script from 'next/script'
import '../../../styles/resumeLayout.module.css';
interface WithRouterProps {
    children?: ReactNode,
    title?: string
    description?: string
}

interface MyComponentProps extends WithRouterProps { }
class ResumeDefault extends React.Component<MyComponentProps, { showSpinner: Boolean }> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <NextSeo title={this.props.title} description={this.props.description} openGraph={{ title: this.props.title, description: this.props.description }} />
                <Head>
                    <link rel="stylesheet" href="/assets/css/reset.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/animations.css" type="text/css" />
                    <link rel="stylesheet" href="/assets/css/perfect-scrollbar.css" type="text/css" />
                    {/* <link rel="stylesheet" href="/assets/css/owl.carousel.css" type ="text/css" /> */}
                    <link rel="stylesheet" href="/assets/css/magnific-popup.css" type="text/css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
                </Head>
                <div className="page">
                    <div className="page-content">

                        <Header />

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


                <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
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