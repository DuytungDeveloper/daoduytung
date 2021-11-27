import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/globals.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
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
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const url = `https://daoduytung.herokuapp.com${router.route}`
  let [showSpiner, setSpiner] = useState(true);
  let [animation, setAnimation] = useState(Variant_Helper.Arrays[0]);
  useEffect(() => {
    setSpiner(false);
  }, []);

  useEffect(() => {
    let temp = Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)];
    setAnimation(Variant_Helper.Arrays[Math.floor(Math.random() * Variant_Helper.Arrays.length)]);
  }, [Component, router]);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="robots" content="index, archive" />
      <meta name="google-site-verification" content="VsN64OMCqBNjTgHAa1zv6eIADSYuj7JHW7IJSLRvW8c" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <title>Đào Duy Tùng - Software Engineer</title>
      <meta name="description" content="Đào Duy Tùng Software Engineer lập trình viên có nhiều kinh nghiệm trong nghề sẽ luôn đồng hành cùng khách hàng và cải thiện trải nghiệm người dùng trên các sản phẩm công nghệ anh làm ra!" />

    </Head>
    <DefaultSeo
      titleTemplate="%s | Đào Duy tùng"
      openGraph={{
        type: 'website',
        locale: 'vn_IE',
        url,
        description: 'Đào Duy Tùng Software Engineer lập trình viên có nhiều kinh nghiệm trong nghề sẽ luôn đồng hành cùng khách hàng và cải thiện trải nghiệm người dùng trên các sản phẩm công nghệ anh làm ra!',
        site_name: 'Đào Duy Tùng | Software Engineer',
        images: [],
      }}
    />
    <Spinner show={showSpiner} />
    {getLayout(
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
    )
    }
  </>;
}