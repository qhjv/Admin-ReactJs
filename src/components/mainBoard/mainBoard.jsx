import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import DashBoard from '../../Features/dashboard/dashBoard';
import Offer from '../../Features/offer/offer';
import People from '../../Features/people/people';
import './mainBoard.css';
MainBoard.propTypes = {
    
};

function MainBoard() {

    return (
            <div className="MainBoard">
                <Route exact path="/dashboards" component={DashBoard}/>
                <Route exact path="/offers" component={Offer}/>
                <Route exact path="/" component={People}/>
                
            </div>
    );
}

export default MainBoard;