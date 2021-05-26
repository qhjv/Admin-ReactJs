import React from 'react';
import { useSelector } from 'react-redux';
import './peopleTimeView.css';


PeopleTimeView.propTypes = {
    
};

function PeopleTimeView(props) {
  const candidateslist = useSelector(state=>state.candidateslist)

    return (
        <div class="timeview">
                      <div class="timeview__header d-flex justify-content-between align-items-center">
                          <h3>Calendar</h3>
                          <div class="timeview__header--icon d-flex justify-content-center align-items-center">
                            <i class="far fa-calendar-alt"></i>
                          </div>
                      </div>
                      <div class="timeview__lists">
                          <div class="timeview__list">
                            
                            <div class="timeview__list--details">
                                {candidateslist.slice().sort(function(a, b) {
                                    a = new Date(a.calendar);
                                    b = new Date(b.calendar);
                                    return a-b

                                }).map((cand)=>(

                                <div key={cand.id} class="timeview__list--detail d-flex justify-content-between align-items-center">
                                    <div class="timeview__list--detail-time timeview__list--detail-time1">
                                        <h3>{cand.time}</h3>
                                        <small>{cand.calendar}</small>
                                    </div>
                                    <div class="timeview__list--detail-content">
                                        <h5>{cand.fullname}</h5>
                                        <small>{cand.position}</small>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                          </div>

                      </div>
                  </div>
    );
}

export default PeopleTimeView;