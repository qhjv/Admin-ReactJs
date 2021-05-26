import React from 'react';
import MainCandidatePercents from './components/mainCandidatePercents/mainCandidatePercents';
import MainCandidates from './components/mainCandidatesView/mainCandidates';
import "./peopleMainView.css";


 PeopleMainView.propTypes = {
    
};

function PeopleMainView(props) {
    return (
        <div className="mainview mainview2 d-flex flex-column ">
        <div className="container">
          <div className="row">
            <MainCandidatePercents></MainCandidatePercents>
            <MainCandidates></MainCandidates>
          </div>
        </div>
      </div>
    );
}

export default PeopleMainView;