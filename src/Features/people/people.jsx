import React from 'react';
import PeopleMainView from './components/peopleMainView/peopleMainView';
import PeopleTimeView from './components/peopleTimeView/peopleTimeView';
import './people.css';
People.propTypes = {
    
};

function People(props) {
    return (
        <div className="PeopleView">
            <PeopleMainView></PeopleMainView>
            <PeopleTimeView></PeopleTimeView>
        </div>
    );
}

export default People;