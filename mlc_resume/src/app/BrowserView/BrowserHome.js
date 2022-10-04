
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup }from 'react-transition-group';



import BrowserBanner from "./Banner/BrowserBanner";
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

        this.props.router.navigate(r);
    }

    render()
    {
        console.log("Render", this.props.router.location.pathname);

        return(
            <div className={"BrowserHome BrowserHome" + this.props.theme}>
                <BrowserBanner theme={this.props.theme} setTheme={this.setTheme} setRoute={this.setRoute} />

                <TransitionGroup>
                    <CSSTransition

                        timeout={500}
                    
                    >

                        <Routes>
                            <Route exact path={"/"} element={ <BrowserResume /> } />
                            <Route exact path={ROUTE_RESUME}  element={ <BrowserResume /> } />
                            <Route exact path={ROUTE_HISTORY} element={ <BrowserHistory /> } />
                        </Routes>

                    </CSSTransition>
                </TransitionGroup>


            </div>
        )
    }
}

export default WithRouter( BrowserHome );