import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
const Home = () => {
  return (
    <>
      <section className="animated-section ps ps--theme_default section-active">
        <div className="section-content vcentered">

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h2>Hồ sơ</h2>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumeLayout title={"Kinh nghiệm và kỹ năng"} description="Hồ sơ kinh nghiệm và kỹ năng về Web Developer">
      {page}
    </ResumeLayout>
  )
}