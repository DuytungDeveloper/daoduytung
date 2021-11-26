import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = () => {
    return (
        <section data-id="home" className="animated-section ps ps--theme_default section-active">
            <div className="section-content vcentered">

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="title-block">
                            <h2>Đào Duy Tùng</h2>
                            <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} nav={false} autoplay={true} autoplayHoverPause={false} autoplayTimeout={3000} animateOut={'animated-section-scaleDown'} animateIn={'animated-section-scaleUp'}>
                                <div className="item">
                                    <div className="sp-subtitle">Web Developer</div>
                                </div>

                                <div className="item">
                                    <div className="sp-subtitle">BackEnd Developer</div>
                                </div>
                                
                                <div className="item">
                                    <div className="sp-subtitle">Software Engineer</div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home