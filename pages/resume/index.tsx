import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
const Home = () => {
  return (
    <>
      <section data-id="resume" className="animated-section ps ps--theme_default section-active">
        <div className="page-title">
          <h2>Resume</h2>
        </div>

        <div className="section-content">

          <div className="row">
            <div className="col-xs-12 col-sm-7">

              <div className="block-title">
                <h3>Education</h3>
              </div>

              <div className="timeline timeline-second-style clearfix">

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2020</h5>
                    <span className="item-company">Đại học Bách Khoa</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">Khoa học máy tính</h4>
                    <p>Chuyên ngành phần mềm. Với các chương trình đào tạo như lập trình với các ngôn ngữ như JavaScript (Nodejs), C# (.NetCore), Python, Golang; Cơ sở dữ liệu (SQL Server, MySQL, MongoDB, ...)</p>
                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2014</h5>
                    <span className="item-company">Cao đẳng Kỹ Thuật Cao Thắng</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">Công nghệ phần mềm</h4>
                    <p>Chuyên ngành lập trình Website. Với các chương trình đào tạo như lập trình với các ngôn ngữ như C/C++ (Cơ bản), C# (Window Application, Webform), PHP (Website cơ bản); Cơ sở dữ liệu (SQL Server, MySQL).</p>
                  </div>
                </div>

              </div>

              <div className="white-space-50"></div>

              <div className="block-title">
                <h3>Kinh nghiệm</h3>
              </div>

              <div className="timeline timeline-second-style clearfix">
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2020 - Current</h5>
                    <span className="item-company">Vihat</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">Fullstack Developer</h4>
                    <p>Xây dựng hệ thống tin nhắn</p>
                    <p>Xây dựng Website giới thiệu sản phẩm công ty</p>
                    <p>Tối ưu cấu trúc hệ thống</p>
                    <p>Xây dựng hệ thống TOPUP với khả năng chịu tải cao</p>
                    <p>Quản lý CSDL MSSQL</p>
                    <p>Nghiên cứu hệ thống DataWareHouse</p>

                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2017 - 2018</h5>
                    <span className="item-company">Dirox</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">Software engineer</h4>
                    <p>Lập trình back-end cho hệ thống API của game Stocket (Mobile shopping game).</p>
                    <p>  Xây dựng trang quản lý bằng Angular 2.</p>
                    <p>   Học về công nghệ mới NodeJS (Các Framework như Loopback, Express)</p>
                    <p>  Công ty có 4 chi nhánh tại Việt Nam, Pháp, HongKong, Nhật Bản.</p>
                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2016 - 2016</h5>
                    <span className="item-company">Ryomo Vietnam Solutions Co., Ltd.</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">Thực tập sinh (Vị trí Web Developer)</h4>
                   <p> Tìm hiểu ASP.NET MVC5 và MongoDB</p>
                   <p>Cách thiết lập và thực hiện Project</p>
                   <p>Xây dựng hệ thống Website Quản lý thông tin nội bộ công ty RVSC</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-sm-5">
              <div className="block-title">
                <h3>Design <span>Skills</span></h3>
              </div>

              <div className="skills-info skills-second-style">
                <div className="skill clearfix">
                  <h4>Web Design</h4>
                  <div className="skill-value">60%</div>
                </div>
                <div className="skill-container skill-1">
                  <div className="skill-percentage"></div>
                </div>
{/* 
                <div className="skill clearfix">
                  <h4>Print Design</h4>
                  <div className="skill-value">65%</div>
                </div>
                <div className="skill-container skill-2">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>Logo Design</h4>
                  <div className="skill-value">80%</div>
                </div>
                <div className="skill-container skill-3">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>Graphic Design</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div className="skill-container skill-4">
                  <div className="skill-percentage"></div>
                </div> */}

              </div>

              <div className="white-space-10"></div>

              <div className="block-title">
                <h3>Coding <span>Skills</span></h3>
              </div>

              <div className="skills-info skills-second-style">
                <div className="skill clearfix">
                  <h4>JavaScript</h4>
                  <div className="skill-value">95%</div>
                </div>
                <div className="skill-container skill-5">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>C#</h4>
                  <div className="skill-value">85%</div>
                </div>
                <div className="skill-container skill-6">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>HTML/CSS</h4>
                  <div className="skill-value">100%</div>
                </div>
                <div className="skill-container skill-7">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>Smarty/Twig</h4>
                  <div className="skill-value">75%</div>
                </div>
                <div className="skill-container skill-8">
                  <div className="skill-percentage"></div>
                </div>

                <div className="skill clearfix">
                  <h4>Perl</h4>
                  <div className="skill-value">90%</div>
                </div>
                <div className="skill-container skill-9">
                  <div className="skill-percentage"></div>
                </div>
              </div>

              <div className="white-space-10"></div>

              <div className="block-title">
                <h3>Knowledges</h3>
              </div>

              <ul className="knowledges">
                <li>Marketing</li>
                <li>Print</li>
                {/* <li>Digital Design</li> */}
                {/* <li>Social Media</li> */}
                <li>Time Management</li>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Social Networking</li>
                <li>Flexibility</li>
              </ul>
            </div>
          </div>

          <div className="white-space-50"></div>

          {/* <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="block-title">
                <h3>Certificates</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src="assets/img/clients/client-1.png" alt="logo" />
                </div>

                <div className="certi-content">
                  <div className="certi-title">
                    <h4>Psyhology of Intertnation Design</h4>
                  </div>
                  <div className="certi-id">
                    <span>Membership ID: XXXX</span>
                  </div>
                  <div className="certi-date">
                    <span>19 April 2018</span>
                  </div>
                  <div className="certi-company">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src="assets/img/clients/client-1.png" alt="logo" />
                </div>

                <div className="certi-content">
                  <div className="certi-title">
                    <h4>Psyhology of Intertnation Design</h4>
                  </div>
                  <div className="certi-id">
                    <span>Membership ID: XXXX</span>
                  </div>
                  <div className="certi-date">
                    <span>19 April 2018</span>
                  </div>
                  <div className="certi-company">
                    <span></span>
                  </div>
                </div>
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
    <ResumeLayout title={"Kinh nghiệm và kỹ năng"} description="Hồ sơ kinh nghiệm và kỹ năng về Web Developer">
      {page}
    </ResumeLayout>
  )
}