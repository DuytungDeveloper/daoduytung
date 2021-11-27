// import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react'
import ResumeLayout from '../components/layouts/resume/layouts';
import dynamic from "next/dynamic";
import { Animated } from "react-animated-css";
import { useRouter } from 'next/router'
import OwlCarousel from 'react-owl-carousel';
const HomePage = dynamic(
  () => {
    return import("../components/Resume/homePage");
  },
  { ssr: false }
);

const Home = () => {
  const router = useRouter()
  return (
    // <section data-id="home" className="animated-section ps ps--theme_default section-active">
    //   <div className="section-content vcentered">

    //     <div className="row">
    //       <div className="col-sm-12 col-md-12 col-lg-12">
    //         <div className="title-block">
    //           <h2>Đào Duy Tùng</h2>
    //           <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} nav={false} autoplay={true} autoplayHoverPause={false} autoplayTimeout={3000} animateOut={'animated-section-scaleDown'} animateIn={'animated-section-scaleUp'}>
    //             <div className="item">
    //               <div className="sp-subtitle">Web Developer</div>
    //             </div>

    //             <div className="item">
    //               <div className="sp-subtitle">BackEnd Developer</div>
    //             </div>

    //             <div className="item">
    //               <div className="sp-subtitle">Software Engineer</div>
    //             </div>
    //           </OwlCarousel>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </section>

    <HomePage />

    // <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} key={router.route}>
    //   <HomePage />

    // </Animated>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumeLayout>
      {page}

      {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        {page}
      </Animated> */}
    </ResumeLayout>
  )
}