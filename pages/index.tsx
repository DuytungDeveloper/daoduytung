// import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react'
import ResumeLayout from '../components/layouts/resume/layouts';
import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => {
    return import("../components/Resume/homePage");
  },
  { ssr: false }
);

const Home = () => {
  return (
    <HomePage />
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumeLayout>
      {page}
    </ResumeLayout>
  )
}