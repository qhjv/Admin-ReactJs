import React from 'react';
import MainCandidates from './components/mainCandidatesView/mainCandidates';
import "./peopleMainView.css";


 PeopleMainView.propTypes = {
    
};

function PeopleMainView(props) {
    return (
        <div className="mainview mainview2 d-flex flex-column ">
        <div className="container">
          <div className="row">
            <div className="mainview__hire">
              <div className="mainview__hire--header d-flex justify-content-between align-items-center">
                <div className="mainview__hire--header-title">
                  <h3>You need to hire</h3>
                </div>
                <div className="mainview__hire--header-button">
                  View all
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="mainview__hire--percents">
                <div className="container">
                  <div className="row">
                    <div className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>2</h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>Project manager</h4>
                        <small>10 condidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle1">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle className="circle2" cx={18} cy={18} r={18} />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>75<span>%</span></h2>
                        </div>
                      </div>
                    </div>
                    <div className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>3</h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>Content manager</h4>
                        <small>7 condidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle2">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle className="circle2" cx={18} cy={18} r={18} />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>50<span>%</span></h2>
                        </div>
                      </div>
                    </div>
                    <div className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>1</h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>Senior UI/UX Designer</h4>
                        <small>3 condidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle3">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle className="circle2" cx={18} cy={18} r={18} />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>0<span>%</span></h2>
                        </div>
                      </div>
                    </div>
                    <div className="mainview__hire--percents d-flex align-items-center justify-content-between col-lg-6 col-md-12">
                      <div className="mainview__hire--percent-number">
                        <h3>8</h3>
                      </div>
                      <div className="mainview__hire--percent-tittle">
                        <h4>JavaScript Developer</h4>
                        <small>21 condidates</small>
                      </div>
                      <div className="mainview__hire--percent-circle mainview__hire--percent-circle4">
                        <svg>
                          <circle className="circle1" cx={18} cy={18} r={18} />
                          <circle className="circle2" cx={18} cy={18} r={18} />
                        </svg>
                        <div className="mainview__hire--percent-circle_number">
                          <h2>65<span>%</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MainCandidates></MainCandidates>
          </div>
        </div>
      </div>
    );
}

export default PeopleMainView;