import type { NextPage } from 'next'
import ResumeLayout from '../../components/layouts/resume/layouts';
const Home: NextPage = () => {
  return (
    <>
      <ResumeLayout>
        <section data-id="home" className="animated-section start-page">
          <div className="section-content vcentered">

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2>Đào Duy Tùng</h2>
                  <div className="owl-carousel text-rotation">
                    <div className="item">
                      <div className="sp-subtitle">Web Developer</div>
                    </div>

                    <div className="item">
                      <div className="sp-subtitle">BackEnd-developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        blog
      </ResumeLayout>



    </>
  )
}

export default Home