import '../styles/globals.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import  '../styles/ttemplate/main.css'
// import type { AppProps } from 'next/app'
// import Head from 'next/head'
// import Script from 'next/script'

import { useState, useEffect, useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import Spinner from '../components/spinners/default_spinner'
import Variant_Helper from '../utils/Variant_Helper'


import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import {
  motion, AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion";
import { Animated } from "react-animated-css";
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
















// https://www.youtube.com/watch?v=SuqU904ZHA4














export default function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  let [showSpiner, setSpiner] = useState(true);
  let [animation, setAnimation] = useState(Variant_Helper.Arrays[0]);
  useEffect(() => {
    setSpiner(false);
  }, []);

  useEffect(() => {
    console.log('-------------------');
    // console.log(Variant_Helper.Arrays.length);
    console.log(Math.floor(Math.random() * Variant_Helper.Arrays.length));
    let temp = Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)];
    // while (temp == animation) {
    //   temp = Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)];
    // }
    console.log(temp);
    setAnimation(Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)]);
  }, [Component, router]);

  // let animation = useMemo(() => {
  //   return Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)]
  // }, [Component]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return <>
    <Spinner show={showSpiner} />
    {getLayout(
      // <motion.div
      //   key={router.route}
      //   // className="animate__animated animate__fadeIn"
      //   // transition={{
      //   //   delay: 1,
      //   //   default: { duration: 1 },
      //   // }}
      //   // animate={{ x: 100 }}
      //   // transition={{ type: "spring", bounce: 0.25 }}

      //   initial="initial"
      //   animate="animate"
      //   exit="exit"

      //   variants={Variant_Helper.fadeBack.variants}
      //   transition={Variant_Helper.fadeBack.transition}

      // // variants={{
      // //   initial: {
      // //     opacity: 0,
      // //     // transitionDelay : '-moz-initial'
      // //   },
      // //   animate: {
      // //     opacity: 1,
      // //   },
      // //   exit: {
      // //     className: "animate__animated animate__fadeOut"
      // //   }
      // // }}
      // >
      //   <Component {...pageProps} />
      // </motion.div>


      <LazyMotion features={domAnimation}>
        <AnimatePresence
          onExitComplete={() => window.scrollTo(0, 0)}

          exitBeforeEnter
          presenceAffectsLayout
        >
          <m.div
            // key={router.route.concat(animation.name)}
            key={router.route}
            // className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>


      // <Component {...pageProps} />


      // <motion.div>
      //   <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} key={router.route}>
      //     <Component {...pageProps} router={router}/>
      //   </Animated>
      // </motion.div>

      // <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} key={router.route}>
      //   <Component {...pageProps} />
      // </Animated>
    )
    }
  </>;
  return getLayout(<Component {...pageProps} />)
}