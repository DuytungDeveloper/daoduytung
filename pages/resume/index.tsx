import { useEffect, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import { NextPage } from 'next';
interface DetailViewSkill {
  name: string,
  percent: string
}
interface SkillData {
  name: string,
  detail: Array<DetailViewSkill>
}

const ViewSkill = () => {
  let allSkillDefault: Array<SkillData> = [
    {
      name: 'Coding',
      detail: [
        {
          name: "JavaScript",
          percent: '85%'
        },
        {
          name: "C#",
          percent: '85%'
        },
        {
          name: "Python",
          percent: '70%'
        },
        {
          name: "Golang",
          percent: '60%'
        },
        {
          name: "PHP",
          percent: '40%'
        },
        {
          name: "ReactJS",
          percent: '80%'
        },
        {
          name: "HTML/CSS",
          percent: '85%'
        },
        {
          name: "Angular",
          percent: '50%'
        },
      ]
    },
    {
      name: 'Code Manager',
      detail: [
        {
          name: "GIT",
          percent: '80%'
        },
        {
          name: "SVN",
          percent: '70%'
        },
      ]
    },
    {
      name: 'Code Editer',
      detail: [
        {
          name: "Visual Studio",
          percent: '80%'
        },
        {
          name: "Visual Studio Code",
          percent: '90%'
        },
      ]
    },
    {
      name: 'Test',
      detail: [
        {
          name: "UnitTest",
          percent: '80%'
        },
        {
          name: "Jmeter",
          percent: '75%'
        },
      ]
    },
    {
      name: 'Technology',
      detail: [
        {
          name: "Redis",
          percent: '80%'
        },
        {
          name: "RabbitMQ",
          percent: '78%'
        },
        {
          name: "Kafka",
          percent: '70%'
        },
        {
          name: "Docker",
          percent: '80%'
        },

      ]
    },
    {
      name: 'Database',
      detail: [
        {
          name: "MSSQL",
          percent: '85%'
        },
        {
          name: "MongoDB",
          percent: '88%'
        },
        {
          name: "Clickhouse",
          percent: '70%'
        },
      ]
    },
    {
      name: 'OS',
      detail: [
        {
          name: "Window",
          percent: '80%'
        },
        {
          name: "Linux/Ubuntu",
          percent: '70%'
        },
      ]
    },
    {
      name: 'Design',
      detail: [
        {
          name: "Bootstrap",
          percent: '80%'
        }
      ]
    },
    {
      name: 'Soft',
      detail: [
        {
          name: "English",
          percent: '60%'
        },
        {
          name: "Communicate",
          percent: '88%'
        },
        {
          name: "Manager",
          percent: '70%'
        },
        {
          name: "Trainning",
          percent: '78%'
        },
        {
          name: "Google Search",
          percent: '80%'
        },

      ]
    },
  ]
  let Knowledges = [
    "Problem-Solving",
    "SEO",
    "Time Management",
    "Communication",
    "Print",
    "Excel",
    "Word",
    "Powerpoint",
    "Social Networking",
    "Flexibility"
  ];
  return <>
    {allSkillDefault.map((x, i) => {
      return <div key={i}>
        <div className="block-title" >
          <h3>{x.name} <span>Skills</span></h3>
        </div>
        <div className="skills-info skills-second-style" >
          {x.detail.map((detail, j) => {
            return (
              <div key={j}>
                <div className="skill clearfix" >
                  <h4 about={detail.name} aria-label={detail.name} >{detail.name}</h4>
                  <div className="skill-value">{detail.percent}</div>
                </div>
                <div className="skill-container">
                  <div className="skill-percentage" style={{ width: detail.percent }}></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="white-space-10"></div>

      </div>
    })}
    <div className="block-title">
      <h3>Knowledges</h3>
    </div>

    <ul className="knowledges">
      {Knowledges.map((x, i) => {
        return <li key={i}>{x}</li>
      })}
    </ul>
  </>
}

const Home = () => {
  useEffect(() => {
    //@ts-ignore
    customScroll();
  }, [])
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
                    <p>Chuyên ngành phần mềm. Với các chương trình đào tạo như lập trình với các ngôn ngữ như JavaScript (Nodejs), C# (.NetCore), Python, Golang; Cơ sở dữ liệu (SQL Server, MySQL, MongoDB, ...), Hệ điều hành (Linux, Window), Công nghệ phần mềm, Mạng máy tính.</p>
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
                    <p>Tối ưu và xây dựng các tính năng mới cho hệ thống tin nhắn eSMS.</p>
                    <p>Tái cấu trúc Website giới thiệu sản phẩm công ty.</p>
                    <p>Xây dựng thêm các chức năng mới cho hệ thống nhắn tin trúng giải.</p>
                    <p>Xây dựng giao diện quản lý thông tin chương trình trúng thưởng của tập đoàn Tân Hiệp Phát (.NET, ReactJS, ....)</p>
                    <p>Bảo trì và nâng cấp hệ thống TOPUP với khả năng chịu tải cao. Áp dụng công nghệ mới như ReactJS, Electron, .... để xây dựng ứng dụng quản lý theo dõi hệ thống. Xây dựng hệ thống dùng để test tránh ảnh hưởng hệ thống thật.</p>
                    <p>Phối hợp và hỗ trợ giải quyết các vấn đề về hệ thống cho các phòng ban chăm sóc khách hàng, nhà cung cấp , khách hàng.</p>
                    <p>Nghiên cứu hệ thống DataWareHouse.</p>
                    <p>Trainning nhân viên mới.</p>
                    <p>Quản lý CSDL MSSQL.</p>
                    <p>Quản lý CSDL MongoDB.</p>
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
                    <p> Tìm hiểu ASP.NET MVC5 và MongoDB.</p>
                    <p>Cách thiết lập và thực hiện Project.</p>
                    <p>Xây dựng hệ thống Website Quản lý thông tin nội bộ công ty RVSC.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-xs-12 col-sm-5">
              <ViewSkill />
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