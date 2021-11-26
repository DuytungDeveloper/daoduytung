import Header from './header';
import React, { Suspense, lazy } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import Spinner from '../../spinners/default_spinner'
// import $ from 'jquery'
class ResumeDefault extends React.Component<{}, { showSpinner: Boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            showSpinner: true
        }
    }

    componentDidMount() {
        this.setState({ showSpinner: false })
        // $(".preloader").fadeOut(800, "linear");
    }

    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <title>Đào Duy Tùng - Software Engineer</title>
                    <meta name="description" content="Đào Duy Tùng Software Engineer lập trình viên có nhiều kinh nghiệm trong nghề sẽ luôn đồng hành cùng khách hàng và cải thiện trải nghiệm người dùng trên các sản phẩm công nghệ anh làm ra!" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                    <meta name="robots" content="index, archive" />
                    <meta name="google-site-verification" content="VsN64OMCqBNjTgHAa1zv6eIADSYuj7JHW7IJSLRvW8c" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />

                    <link rel="stylesheet" href="/assets/css/reset.css" type="text/css" />
                    {/* <link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css" type ="text/css" /> */}
                    <link rel="stylesheet" href="/assets/css/animations.css" type ="text/css" />
                    <link rel="stylesheet" href="/assets/css/perfect-scrollbar.css" type="text/css" />
                    {/* <link rel="stylesheet" href="/assets/css/owl.carousel.css" type ="text/css" /> */}
                    {/* <link rel="stylesheet" href="/assets/css/magnific-popup.css" type ="text/css" /> */}
                  

                </Head>
                {/* <div className="lm-animated-bg" style={{ backgroundImage: "url(/assets/img/main_bg.png)" }}></div> */}

                {/* {this.state.showSpinner === true &&
                    <div className="preloader">
                        <div className="preloader-animation">
                            <div className="preloader-spinner">
                            </div>
                        </div>
                    </div>
                } */}

                {/* <div className="preloader">
                    <div className="preloader-animation">
                        <div className="preloader-spinner">
                        </div>
                    </div>
                </div> */}
                <Spinner show={this.state.showSpinner}></Spinner>

                <div className="page">
                    <div className="page-content">

                        <Header />

                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>


                        <div className="lmpixels-arrows-nav">
                            <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                            <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
                        </div>

                        <div className="content-area">
                            <div className="animated-sections">
                                {this.props.children}
                            </div>
                        </div>

                    </div>
                </div>


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