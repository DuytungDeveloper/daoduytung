import { useEffect, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import { useTranslation, Trans } from 'react-i18next';

interface DetailViewSkill {
  name: string,
  percent: string,
  title: string
}
interface SkillData {
  name: string,
  detail: Array<DetailViewSkill>
}

const ViewSkill = () => {
  const { t, i18n } = useTranslation();
  let allSkillDefault: Array<SkillData> = [
    {
      name: t('resume.coding'),
      detail: [
        {
          name: "JavaScript",
          percent: '85%',
          title: '3 Year'
        },
        {
          name: "C#",
          percent: '85%',
          title: '3 Year'
        },
        {
          name: "Python",
          percent: '30%',
          title: '0.5 Year'
        },
        {
          name: "Golang",
          percent: '30%',
          title: '0.5 Year'
        },
        {
          name: "PHP",
          percent: '40%',
          title: '0.3 Year'
        },
        {
          name: "ReactJS",
          percent: '80%',
          title: '1 Year'
        },
        {
          name: "HTML/CSS",
          percent: '85%',
          title: '2 Year'
        },
        {
          name: "Angular",
          percent: '50%',
          title: '1 Year'
        },
      ]
    },
    {
      name: t('resume.codeManager'),
      detail: [
        {
          name: "GIT",
          percent: '80%',
          title: 'Always'
        },
        {
          name: "SVN",
          percent: '70%',
          title: '2 Year'
        },
      ]
    },
    {
      name: t('resume.codeEditor'),
      detail: [
        {
          name: "Visual Studio",
          percent: '80%',
          title: 'Most Of Time'
        },
        {
          name: "Visual Studio Code",
          percent: '90%',
          title: 'Always'
        },
      ]
    },
    {
      name: t('resume.test'),
      detail: [
        {
          name: "UnitTest",
          percent: '80%',
          title: 'Always'
        },
        {
          name: "Jmeter",
          percent: '75%',
          title: '2 Year'
        },
      ]
    },
    {
      name: t('resume.congNghe'),
      detail: [
        {
          name: "Redis",
          percent: '80%',
          title: '2 Year'
        },
        {
          name: "RabbitMQ",
          percent: '80%',
          title: '2 Year'
        },
        {
          name: "Kafka",
          percent: '50%',
          title: '1 Year'
        },
        {
          name: "Docker",
          percent: '80%',
          title: '1 Year'
        },

      ]
    },
    {
      name: t('resume.dataBase'),
      detail: [
        {
          name: "MSSQL",
          percent: '85%',
          title: '3 Year'
        },
        {
          name: "MongoDB",
          percent: '88%',
          title: '3 Year'
        },
        {
          name: "Clickhouse",
          percent: '40%',
          title: '0.5 Year'
        },
      ]
    },
    {
      name: t('resume.heDieuHanh'),
      detail: [
        {
          name: "Window",
          percent: '80%',
          title: 'Always'
        },
        {
          name: "Linux/Ubuntu",
          percent: '70%',
          title: '2 Year'
        },
      ]
    },
    {
      name: t('resume.thietKe'),
      detail: [
        {
          name: "Bootstrap",
          percent: '80%',
          title: '2 Year'
        }
      ]
    },
    {
      name: t('resume.soft'),
      detail: [
        {
          name: "English",
          percent: '50%',
          title: '50%'
        },
        {
          name: "Communicate",
          percent: '88%',
          title: '88%'
        },
        {
          name: "Manager",
          percent: '70%',
          title: '70%'
        },
        {
          name: "Trainning",
          percent: '78%',
          title: '78%'
        },
        {
          name: "Google Search",
          percent: '80%',
          title: '80%'
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
                  <div className="skill-value">{detail.title ? detail.title : detail.percent}</div>
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
      <h3><Trans i18nKey="resume.kienThuc" /></h3>
    </div>

    <ul className="knowledges">
      {Knowledges.map((x, i) => {
        return <li key={i}>{x}</li>
      })}
    </ul>
  </>
}

const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    //@ts-ignore
    customScroll();
  }, [])
  return (
    <>
      <section data-id="resume" className="animated-section ps ps--theme_default section-active">
        <div className="page-title">
          <h2><Trans i18nKey="resume.title" /></h2>
        </div>

        <div className="section-content">

          <div className="row">
            <div className="col-xs-12 col-sm-7">

              <div className="block-title">
                <h3><Trans i18nKey="resume.education" /></h3>
              </div>

              <div className="timeline timeline-second-style clearfix">

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2020</h5>
                    <span className="item-company"><Trans i18nKey="resume.daiHocBachKhoa" /></span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title"><Trans i18nKey="resume.khoaHocMayTinh.title" /></h4>
                    <p><Trans i18nKey="resume.khoaHocMayTinh.info" /></p>
                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2014</h5>
                    <span className="item-company"><Trans i18nKey="resume.caoDangCaoThang" /></span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title"><Trans i18nKey="resume.congNghePhanMem.title" /></h4>
                    <p><Trans i18nKey="resume.congNghePhanMem.info" /></p>
                  </div>
                </div>

              </div>

              <div className="white-space-50"></div>

              <div className="block-title">
                <h3><Trans i18nKey="resume.kinhNghiem.title" /></h3>
              </div>

              <div className="timeline timeline-second-style clearfix">
                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2020 - Current</h5>
                    <span className="item-company">Vihat</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title"><Trans i18nKey="resume.kinhNghiem.vihat.jobTitle" /></h4>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part1" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part2" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part3" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part4" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part5" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part6" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part7" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part8" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part9" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.vihat.part10" /></p>

                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2017 - 2018</h5>
                    <span className="item-company">Dirox</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title"><Trans i18nKey="resume.kinhNghiem.dirox.jobTitle" /></h4>
                    <p><Trans i18nKey="resume.kinhNghiem.dirox.part1" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.dirox.part2" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.dirox.part3" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.dirox.part4" /></p>
                  </div>
                </div>

                <div className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">2016 - 2016</h5>
                    <span className="item-company">Ryomo Vietnam Solutions Co., Ltd.</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title"><Trans i18nKey="resume.kinhNghiem.ryomo.jobTitle" /></h4>
                    <p><Trans i18nKey="resume.kinhNghiem.ryomo.part1" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.ryomo.part2" /></p>
                    <p><Trans i18nKey="resume.kinhNghiem.ryomo.part3" /></p>
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