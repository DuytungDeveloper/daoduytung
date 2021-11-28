import { useEffect } from 'react'
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
const Home = () => {
  useEffect(() => {
    //@ts-ignore
    customScroll();
  }, [])
  return (
    <>
      <section data-id="about-me" className="animated-section ps ps--theme_default section-active">
        <div className="page-title">
          <h2>About <span>Me</span></h2>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <p>Đây là công việc tôi luôn đam mê và muốn theo đuổi, là một lập trình viên có kỹ năng, tôi luôn phấn đấu và cố gắng để phát triển kỹ năng nghề nghiệp, đồng thời luôn muốn học những thứ mới cũng như chuyên sâu về kỹ năng về mảng lập trình Web.</p>

              <p>Tinh thần làm việc nhóm trong ngành là rất quan trọng, bạn không thể hoàn thành tốt một dự án khi không có sự cởi mở trong công việc. Trách nhiệm và cái tâm với nghề sẽ thể hiện trong từng dự án cũng như cách bạn làm việc.</p>

              <p>Không ai là hoàn hảo, vì vậy ta sẽ cần sự nỗ lực từng ngày từng giờ để có thể đạt được thứ ta mong muốn.</p>
            </div>

            <div className="col-xs-12 col-sm-5">
              <div className="info-list">
                <ul>
                  <li>
                    <span className="title">Tuổi</span>
                    <span className="value">{(new Date).getFullYear() - 1996}</span>
                  </li>

                  <li>
                    <span className="title">Nơi cư trú</span>
                    <span className="value">Việt Nam</span>
                  </li>

                  <li>
                    <span className="title">Địa chỉ</span>
                    <span className="value">11 Đường 16, Phướng Phước Long A, TP.Thủ Đức, Việt Nam</span>
                  </li>

                  <li>
                    <span className="title">e-mail</span>
                    <span className="value">duytung.developer@gmail.com</span>
                  </li>

                  <li>
                    <span className="title">Số điện thoại</span>
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
                <h3>What <span>I Do</span></h3>
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
                      <p>Tạo và xây dựng các hệ thống website có yêu cầu bảo mật cao và tốc độ nhanh dựa trên các công nghệ hiện đại như NodeJS, .NetCore, .NET, RabbitMQ, Kafka, Docker, Redis, .... Cùng với đó là các cơ sở dữ liệu như MSSQL, MongoDB, Elasticsearch. Sử dụng nhiều ngôn ngữ khác nhau để tối ưu hệ thống như Javascript, C#, Python, Golang, ...</p>
                    </div>
                  </div>
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-store"></i>
                    </div>
                    <div className="ci-text">
                      <h4>Thương mại điện tử</h4>
                      <p>Có kinh nghiệm trong việc xây dựng, cấu trúc, tối ưu các hệ thống thương mại điện tử lớn nhỏ dựa trên các công nghệ khác nhau</p>
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
                      <h4>Sáng tạo nội dung</h4>
                      <p>Xây dựng các phần mềm, API và các công cụ hỗ trợ theo yêu cầu của khách hàng. Quản lý fanpage, nhập văn bản dữ liệu, thu thập dữ liệu các website, làm tool chức năng cho Chrome theo yêu cầu của khách hàng.  Đưa ra các ý tưởng cũng như cải thiện sản phẩm dự án , tối ưu nhất đối với các hệ thống cũng như luồng công việc thuận tiện cho các bộ phận khác như Sale, CS, ban quản lý , ban giám đốc có thể theo dõi sát sao công việc cũng như hệ thống của khách hàng.</p>
                    </div>
                  </div>
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      <i className="lnr lnr-flag"></i>
                    </div><div className="ci-text">
                      <h4>Quản lý</h4>
                      <p>Tư vấn hộ trợ và quản lý các đội nhóm lập trình giúp các doanh nghiệp vừa và nhỏ có cái nhìn tổng quan về công việc cũng như tránh hao hụt dòng tiền khi quản lý và xây dựng.</p>
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