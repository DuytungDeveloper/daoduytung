import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import { Animated } from "react-animated-css";
import { useState, useEffect } from 'react';
const Home = () => {
  let [isView, setIsView] = useState(true);
  useEffect(() => {
    return () => {
      console.log("Will Unout");
      setIsView(false)
    }
  }, [])
  return (
    <>
      {/* <section className="animated-section ps ps--theme_default section-active">
        <div className="section-content vcentered">

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h2>Thông tin</h2>
              </div>
            </div>
          </div>

        </div>
      </section> */}

      {/* <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={isView}> */}
        <section className="animated-section  section-active">
          <div className="section-content vcentered">

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2>Thông tin</h2>
                </div>
              </div>
            </div>

          </div>
        </section>
      {/* </Animated> */}
    </>
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