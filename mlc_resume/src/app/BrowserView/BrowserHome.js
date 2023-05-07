/**********************************************************************************************

MLC Resume
Copyright (C) 2022  Matthew Cline

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

**********************************************************************************************/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup }from 'react-transition-group';



import BrowserBanner from "./BrowserBanner";
import BrowserResume from "./BrowserResume";
import { WithRouter } from "../../lib/WithRouter";

import './BrowserHome.scss';
import BrowserHistory from "./BrowserHistory";

export const ROUTE_RESUME   = '/resume';
export const ROUTE_HISTORY  = '/history';
export const ROUTE_ABOUT    = '/about';
export const ROUTE_CONTACT  = '/contact';



class BrowserHome extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            route: ROUTE_RESUME
        };

        this.setRoute = this.setRoute.bind(this);
    }

    setTheme = (e) =>
    {
        this.props.setTheme(e);
    }

    setRoute = (r) =>
    {
        console.log("redirect", r, this.props);

        this.setState({ route: r });

        this.props.router.navigate(r);
    }

    render()
    {
        console.log("Render", this.props.router.location.pathname);

        return(
            <div className={"BrowserHome BrowserHome" + this.props.theme}>
                <BrowserBanner theme={this.props.theme} setTheme={this.setTheme} setRoute={this.setRoute} route={this.state.route} />

                <TransitionGroup>
                    <CSSTransition

                        timeout={500}
                    
                    >

                        <Routes>
                            <Route exact path={"/"} element={ <BrowserResume theme={this.props.theme} /> } />
                            <Route exact path={ROUTE_RESUME}  element={ <BrowserResume theme={this.props.theme} /> } />
                            <Route exact path={ROUTE_HISTORY} element={ <BrowserHistory theme={this.props.theme} /> } />
                        </Routes>

                    </CSSTransition>
                </TransitionGroup>


            </div>
        )
    }
}

export default WithRouter( BrowserHome );