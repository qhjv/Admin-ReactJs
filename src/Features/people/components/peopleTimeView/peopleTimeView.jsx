import CachedIcon from '@material-ui/icons/Cached';
import React, { useEffect, useState } from 'react';
import { getCandidates } from '../../../../data/candidatesData';
import './peopleTimeView.css';
PeopleTimeView.propTypes = {
    
};

function PeopleTimeView(props) {
  const [candidates,setCandidates] =useState([])
  const [upload,setUpLoad]=useState(false)
    const getlist = async()=>{
        try {
          const list = await getCandidates()
          if(list){

            setCandidates(list)
          }else{
            setCandidates([{
              id:1,
              fullname:"vuquanghuy",
              position:"test",
              avatar:"",
              favorite:"yes",
              calendar:"25-5-2021",
              time:"7:00"
            },
            ])
          }
          
        } catch (error) {
          console.log("failed:",error)
        }
      }
      useEffect(()=>{
        getlist()
        setUpLoad(false)

      },[upload])
      const handleClickUpload=()=>{
        setUpLoad(true)
      }
    return (
        <div class="timeview">
                      <div class="timeview__header d-flex justify-content-between align-items-center">
                          <h3>Calendar</h3>
                          <div onClick={handleClickUpload} class="timeview__header--icon d-flex justify-content-center align-items-center">
                            <CachedIcon></CachedIcon>
                          </div>
                      </div>
                      <div class="timeview__lists">
                          <div class="timeview__list">
                            
                            <div class="timeview__list--details">
                                {candidates.sort(function(a, b) {
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