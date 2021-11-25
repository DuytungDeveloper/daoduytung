import Header from './header';
import React, { Suspense, lazy } from 'react';
class ResumeDefault extends React.Component {



    constructor(props: any) {
        super(props);
        this.state = {
            showSpinner: true
        }
    }

    componentDidMount() {
        // this.setState({ showSpinner: false })
        // $(".preloader").fadeOut(800, "linear");
    }

    render() {
        return (
            <>

                <div className="lm-animated-bg" style={{ backgroundImage: "url(/assets/img/main_bg.png)" }}></div>

                {/* {this.state.showSpinner == true &&
                 
                } */}

                {/* <div className="preloader">
                    <div className="preloader-animation">
                        <div className="preloader-spinner">
                        </div>
                    </div>
                </div> */}

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




            </>
        );
    }
}


export default ResumeDefault;