import React from 'react';
import './dashBoard.css'
import people2 from '../../assets/img/people2.png'
import people1 from '../../assets/img/people1.png'
import people6 from '../../assets/img/people6.png'
import portfolio1 from '../../assets/img/portfolio1.png'
import portfolio2 from '../../assets/img/portfolio2.png'
import portfolio3 from '../../assets/img/portfolio3.png'
import facebook from '../../assets/img/facebook .png'
import google from '../../assets/img/google.png'
import sketch from '../../assets/img/sketch.png'


DashBoard.propTypes = {
    
};

function DashBoard(props) {
    return (
        <div className="dashBoard">
        <div className="mainview maiview2 d-flex flex-column">
          <div className="mainview2__header d-flex justify-content-between align-items-center">
            <div className="mainview2__header--title">
              <h4>Candidate profile</h4>
            </div>
            <div className="mainview2__header--invite">Invite to Job</div>
          </div>
          <div className="mainview2__mains">
            <div className="container">
              <div className="row">
                <div className="mainview2__main">
                  <div className="mainview2__main1">
                    <div className="mainview2__main--title">Portfolio</div>
                    <div className="maiview2__main--portfolios d-flex justify-content-between align-items-center">
                      <div className="maiview2__main--portfolio">
                        <div className="maiview2__main--portfolio-img maiview2__main--portfolio-img1">
                          <img src={portfolio1} alt="" />
                        </div>
                        <div className="maiview2__main--portfolio-title">
                          <p>Online marketplace for real estate agency</p>
                        </div>
                      </div>
                      <div className="maiview2__main--portfolio">
                        <div className="maiview2__main--portfolio-img maiview2__main--portfolio-img2">
                          <img src={portfolio2} alt="" />
                        </div>
                        <div className="maiview2__main--portfolio-title">
                          <p>Online marketplace for real estate agency</p>
                        </div>
                      </div>
                      <div className="maiview2__main--portfolio">
                        <div className="maiview2__main--portfolio-img maiview2__main--portfolio-img3">
                          <img src={portfolio3} alt="" />
                        </div>
                        <div className="maiview2__main--portfolio-title">
                          <p>Online marketplace for real estate agency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mainview2__main2">
                    <div className="mainview2__main--title">Skills</div>
                    <div className="mainview2__main--skills">
                      <nav>
                        <ul>
                          <li>UI</li>
                          <li>UX</li>
                          <li>UX Research</li>
                          <li>Responsive Web Design</li>
                          <li>Mobile Design</li>
                          <li>Web UI</li>
                        </ul>
                        <ul>
                          <li>Wireframing</li>
                          <li>Branding</li>
                          <li>Usability Testing</li>
                          <li>UX Prototyping</li>
                          <li>UI Graphics</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="mainview2__mores">
                  <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="mainview2__more mainview2__more--recommendations col-lg-6 col-md-12">
                        <div className="mainview2__more--title">Recommendations</div>
                        <div className="mainview2__more--recommendation d-flex justify-content-between ">
                          <div className="mainview2__more--recommendation-img">
                            <img src={people2} alt="" />
                          </div>
                          <div className="mainview2__more--recommendation-content">
                            <h4>Leon Ward,CEO</h4>
                            <small>It was so good to work with Jean.She's veru creative ...</small>
                          </div>
                        </div>
                        <div className="mainview2__more--recommendation d-flex justify-content-between ">
                          <div className="mainview2__more--recommendation-img">
                            <img src={people1} alt="" />
                          </div>
                          <div className="mainview2__more--recommendation-content">
                            <h4>Keith Scott, Project Manager</h4>
                            <small>Jean is a super-talented individual with a constant eager ...</small>
                          </div>
                        </div>
                        <div className="mainview2__more--icon">
                          <div className="mainview__hire--header-button">
                            View all
                            <i className="fas fa-long-arrow-alt-right" />
                          </div>
                        </div>
                      </div>
                      <div className="mainview2__more mainview2__more--documents col-lg-6 col-md-12">
                        <div className="mainview2__more--title">Documents</div>
                        <div className="mainview2__more--document d-flex justify-content-around align-items-center">
                          <div className="mainview2__more--document-header">
                            <i className="fas fa-file-alt" />
                          </div>
                          <div className="mainview2__more--document-content">
                            <h4>Resume.pdf</h4>
                            <small>1.26 MB</small>
                          </div>
                          <div className="mainview2__more--document-icon">
                            <i className="fas fa-cloud-download-alt" />
                          </div>
                        </div>
                        <div className="mainview2__more--document d-flex justify-content-around align-items-center">
                          <div className="mainview2__more--document-header">
                            <i className="fas fa-file-alt" />
                          </div>
                          <div className="mainview2__more--document-content">
                            <h4>Resume.pdf</h4>
                            <small>1.26 MB</small>
                          </div>
                          <div className="mainview2__more--document-icon">
                            <i className="fas fa-cloud-download-alt" />
                          </div>
                        </div>
                        <div className="mainview2__more--document d-flex justify-content-around align-items-center">
                          <div className="mainview2__more--document-header">
                            <i className="fas fa-file-alt" />
                          </div>
                          <div className="mainview2__more--document-content">
                            <h4>Resume.pdf</h4>
                            <small>1.26 MB</small>
                          </div>
                          <div className="mainview2__more--document-icon">
                            <i className="fas fa-cloud-download-alt" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" timeview2">
          <div className="timeview2__contact">
            <div className="timeview__contact--header d-flex justify-content-between align-items-center">
              <div className="timeview__contact--header-img">
                <img src={people6} alt="" />
              </div>
              <div className="timeview__contact--header-title">
                <h4>Jean Wade</h4>
                <small>Middle UI/UX Designer</small>
              </div>
            </div>
            <div className="timeview__contact--content">
              <p>Experienced UX/UI designer with a strong background in visual arts, marketing, communications and psychology</p>
            </div>
            <div className="timeview__contact--links d-flex justify-content-around align-items-center">
              <div className="timeview__contact--link ">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="timeview__contact--link ">
                <i className="fas fa-envelope" />
              </div>
              <div className="timeview__contact--link ">
                <i className="fas fa-comment-alt" />
              </div>
              <div className="timeview__contact--link ">
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>
          </div>
          <div className="timeview2__experiences">
            <div className="timeview2__experiences--header">
              <h4>Experience</h4>
            </div>
            <div className="timeview2__experiences--lists">
              <div className="timeview2__experiences--list">
                <div className="timeview2__experience--header d-flex align-items-center">
                  <img src={google} alt="" />
                  <h4>Google</h4>
                </div>
                <div className="timeview2__experience--info d-flex justify-content-between align-items-center">
                  <div className="timeview2__experience--info-time">
                    <small>Oct 2018 - Present</small>
                  </div>
                  <div className="timeview2__experience--info-place">
                    <i className="fas fa-map-marker-alt" />
                    <small>California</small>
                  </div>
                </div>
                <div className="timeview2__experience--content">
                  <h4>Lead UX Designer</h4>
                  <small>Designed full features of Batmobile Autopilot.user flows, high fidelity mockups</small>
                </div>
              </div>
              <div className="timeview2__experiences--list">
                <div className="timeview2__experience--header d-flex align-items-center">
                  <img src={facebook} alt="" />
                  <h4>Facebook</h4>
                </div>
                <div className="timeview2__experience--info d-flex justify-content-between align-items-center">
                  <div className="timeview2__experience--info-time">
                    <small>Oct 2018 - Present</small>
                  </div>
                  <div className="timeview2__experience--info-place">
                    <i className="fas fa-map-marker-alt" />
                    <small>California</small>
                  </div>
                </div>
                <div className="timeview2__experience--content">
                  <h4>Lead UX Designer</h4>
                  <small>Designed full features of Batmobile Autopilot.user flows, high fidelity mockups</small>
                </div>
              </div>
              <div className="timeview2__experiences--list">
                <div className="timeview2__experience--header d-flex align-items-center">
                  <img src={sketch} alt="" />
                  <h4>Sketch</h4>
                </div>
                <div className="timeview2__experience--info d-flex justify-content-between align-items-center">
                  <div className="timeview2__experience--info-time">
                    <small>Oct 2018 - Present</small>
                  </div>
                  <div className="timeview2__experience--info-place">
                    <i className="fas fa-map-marker-alt" />
                    <small>California</small>
                  </div>
                </div>
                <div className="timeview2__experience--content">
                  <h4>Lead UX Designer</h4>
                  <small>Designed full features of Batmobile Autopilot.user flows, high fidelity mockups</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DashBoard;