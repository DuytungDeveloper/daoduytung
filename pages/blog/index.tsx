import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import { useTranslation, Trans } from 'react-i18next';
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="animated-section ps ps--theme_default section-active">
        <div className="section-content vcentered">

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h2><Trans i18nKey="blog.alert" /></h2>
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
    <ResumeLayout title={"Góc chia sẻ"} description="Góc chia sẻ kiến thức và cuộc sống">
      {page}
    </ResumeLayout>
  )
}