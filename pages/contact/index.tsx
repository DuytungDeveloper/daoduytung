import { useEffect, useState, useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
const Home = () => {
  let [fullName, setFullName] = useState('');
  let [email, setEmail] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');
  let [capchaValue, setCapchaValue] = useState('');
  const recaptchaRef = useRef();

  const onSubmit = async (event: Event) => {
    event.preventDefault();

    const token = recaptchaRef.current.getValue();
    console.log({
      fullName,
      email,
      subject,
      message,
      token
    });
    return;
  }

  return (
    <>

      <section data-id="contact" className="animated-section  ps ps--theme_default section-active">
        <div className="page-title">
          <h2>Contact</h2>
        </div>

        <div className="section-content">

          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="lm-info-block gray-default">
                <i className="lnr lnr-map-marker"></i>
                <h4>Viêt Nam</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <a href="tel:0586571621"><i className="lnr lnr-phone-handset"></i></a>
                <h4><a href="tel:0586571621">058 657 1621</a></h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">

                <h4><a href="mailto:duytung.developer@gmail.com"> <i className="lnr lnr-envelope"></i></a></h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <h4><a href="https://join.skype.com/invite/nAq8QthHd63t" target="_blank" rel="noreferrer"><i className="fab fa-skype"></i></a></h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>
              <div className="lm-info-block gray-default">
                <h4><a href="https://www.linkedin.com/in/%C4%91%C3%A0o-duy-t%C3%B9ng-a09311208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT9PMkPjoTP6qi4mej3%2Beiw%3D%3D" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <h4><a href="https://zalo.me/0586571621" target="_blank" rel="noreferrer">Zalo</a></h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-checkmark-circle"></i>
                <h4>Freelance Available</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>


            </div>


            <div className="col-xs-12 col-sm-8">
              <div id="map" className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.92555498434587!2d106.76793336981561!3d10.817556050530662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6a0c0db230682956!2zMTDCsDQ5JzAzLjMiTiAxMDbCsDQ2JzA1LjQiRQ!5e0!3m2!1sen!2s!4v1638118552503!5m2!1sen!2s" width="100%" height="auto" allowFullScreen={true} loading="lazy"></iframe>
              </div>
              <div className="block-title">
                <h3>How Can I <span>Help You?</span></h3>
              </div>

              <form className="contact-form" method="post" onSubmit={onSubmit}>

                <div className="messages"></div>

                <div className="controls two-columns">
                  <div className="fields clearfix">
                    <div className="left-column">
                      <div className="form-group form-group-with-icon">
                        <input value={fullName} onChange={(event) => { setFullName(event.target.value); }} type="text" name="name" className="form-control" placeholder="" required data-error="Name is required." />
                        <label>Full Name</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group form-group-with-icon">
                        <input value={email} onChange={(event) => { setEmail(event.target.value); }} type="email" name="email" className="form-control" placeholder="" required data-error="Valid email is required." />
                        <label>Email Address</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group form-group-with-icon">
                        <input value={subject} onChange={(event) => { setSubject(event.target.value); }} type="text" name="subject" className="form-control" placeholder="" required data-error="Subject is required." />
                        <label>Subject</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="right-column">
                      <div className="form-group form-group-with-icon">
                        <textarea value={message} onChange={(event) => { setMessage(event.target.value); }} name="message" className="form-control" placeholder="" rows={7} required data-error="Please, leave me a message."></textarea>
                        <label>Message</label>
                        <div className="form-control-border"></div>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="g-recaptcha" data-sitekey="your_site_key"></div> */}
                  {/* <div id="capchaCheck" className="g-recaptcha" data-sitekey="6Lewe2UdAAAAAMiL0cjDUyutcKMymv20sHOQuaS2" data-theme="dark"></div> */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    // size="invisible"
                    sitekey="6Lewe2UdAAAAAMiL0cjDUyutcKMymv20sHOQuaS2"
                  />
                  <input type="submit" className="button btn-send" value="Send message" />
                </div>
              </form>
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
    <ResumeLayout title={"Thông tin liên hệ"} description="Liên hệ với lập trình viên ngay">
      {page}
    </ResumeLayout>
  )
}