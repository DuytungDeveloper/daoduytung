import { useEffect } from 'react'
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import { useTranslation, Trans } from 'react-i18next';
const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    //@ts-ignore
    customScroll();
  }, [])
  return (
    <>
      <section data-id="about-me" className="animated-section ps ps--theme_default section-active">
        <div className="page-title">
          <h2><Trans i18nKey="about.pageTitle.about" /> <span><Trans i18nKey="about.pageTitle.me" /></span></h2>

        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <p><Trans i18nKey="about.aboutMe.part1" /> </p>

              <p><Trans i18nKey="about.aboutMe.part2" /></p>

              <p><Trans i18nKey="about.aboutMe.part3" /></p>
            </div>

            <div className="col-xs-12 col-sm-5">
              <div className="info-list">
                <ul>
                  <li>
                    <span className="title"><Trans i18nKey="about.information.title.tuoi" /></span>
                    <span className="value">{(new Date).getFullYear() - 1996}</span>
                  </li>

                  <li>
                    <span className="title"><Trans i18nKey="about.information.title.noiCuTru" /></span>
                    <span className="value">Việt Nam</span>
                  </li>

                  <li>
                    <span className="title"><Trans i18nKey="about.information.title.diaChi" /></span>
                    <span className="value">11 Đường 16, Phường Phước Long A, TP.Thủ Đức, Việt Nam</span>
                  </li>

                  <li style={{ overflowWrap: "break-word" }}>
                    <span className="title">eMail</span>
                    <span className="value">duytung.developer@gmail.com</span>
                  </li>

                  <li  style={{ overflowWrap: "break-word" }}>
                    <span className="title"><Trans i18nKey="about.information.title.soDienThoai" /></span>
                    <span className="value"><a href="tel:0586571621">0586571621</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="white-space-50"></div>

          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="block-title">
                <h3><Trans i18nKey="about.whatIdo.title.what" /> <span><Trans i18nKey="about.whatIdo.title.iDo" /> </span></h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="col-inner">
                <div className="info-list-w-icon">

                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-laptop-phone"></i>
                    </div><div className="ci-text">
                      <h4>Web Developer</h4>
                      <p><Trans i18nKey="about.whatIdo.web.info" /> </p>
                    </div>
                  </div>
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-store"></i>
                    </div>
                    <div className="ci-text">
                      <h4><Trans i18nKey="about.whatIdo.thuongMaiDienTu.title" /></h4>
                      <p><Trans i18nKey="about.whatIdo.thuongMaiDienTu.info" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="col-inner">
                <div className="info-list-w-icon">
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-pencil"></i>
                    </div>
                    <div className="ci-text">
                      <h4><Trans i18nKey="about.whatIdo.sangTaoNoiDung.title" /></h4>
                      <p><Trans i18nKey="about.whatIdo.sangTaoNoiDung.info" /></p>
                    </div>
                  </div>
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-flag"></i>
                    </div><div className="ci-text">
                      <h4><Trans i18nKey="about.whatIdo.quanLy.title" /></h4>
                      <p><Trans i18nKey="about.whatIdo.quanLy.info" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="white-space-30"></div>

          {/* <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Testimonials</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="testimonials owl-carousel">
                        <div className="testimonial">
                          <div className="img">
                            <img src="assets/img/testimonials/testimonial-1.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Julia Hickman</h4>
                            <h5 className="company">Omni Source</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial">
                          <div className="img">
                            <img src="assets/img/testimonials/testimonial-2.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Robert Watkins</h4>
                            <h5 className="company">Endicott Shoes</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial">
                          <div className="img">
                            <img src="assets/img/testimonials/testimonial-3.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Kristin Carroll</h4>
                            <h5 className="company">Helping Hand</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="white-space-50"></div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Cilents</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="clients owl-carousel">
                        
                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-1.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-2.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-3.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-4.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-5.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-6.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="assets/img/clients/client-7.png" alt="Logo"/>
                          </a>
                        </div>
  
                      </div>
                    </div>
                  </div>

                  <div className="white-space-50"></div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Pricing</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                      <div className="fw-pricing clearfix row">
                        
                        <div className="fw-package-wrap col-md-6 ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Silver</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$64</span>
                              <small>per month</small>
                            </div>
                            
                            <div className="fw-button-row">
                              <a href="#" target="_self" className="btn btn-secondary">Free Trial</a>
                            </div>

                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                          </div>
                        </div>
     
                        <div className="fw-package-wrap col-md-6 highlight-col ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Gold</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$128</span>
                              <small>per month</small>
                            </div>

                            <div className="fw-button-row">
                              <a href="#" target="_self" className="btn btn-primary">Free Trial</a>
                            </div>
                            
                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                            <div className="fw-default-row">Donec non diam</div>
                            <div className="fw-default-row"></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="white-space-50"></div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Fun <span>Facts</span></h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-heart"></i>
                        <h4>Happy Clients</h4>
                        <span className="fun-fact-block-value">578</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-clock"></i>
                        <h4>Working Hours</h4>
                        <span className="fun-fact-block-value">4,780</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 ">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-star"></i>
                        <h4>Awards Won</h4>
                        <span className="fun-fact-block-value">15</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>
                  </div> */}

        </div>
      </section>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumeLayout title={"Thông tin cơ bản"} description="Thông tin cơ bản về lập trình viên">
      {page}
    </ResumeLayout>
  )
}