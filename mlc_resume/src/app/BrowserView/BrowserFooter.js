
import React from 'react';

import './BrowserFooter.scss';

import {SiLinkedin, SiGithub, SiIndeed, SiMonster, SiReact } from 'react-icons/si';
import { FaCopyright } from 'react-icons/fa';

class BrowserFooter extends React.Component
{

    render()
    {
        let now = new Date();
        let year = "Copyright 2022";

        if( now.getFullYear() !== 2022 )
        {
            year = year + "-" + now.getFullYear() + " Matthew Cline";
        }
        else
        {
            year = year + " Matthew Cline";
        }

        return(
            <div className="BrowserFooter">

                <div className="BrowserFooterLinks">
                    <a className="BrowserFooterLink" href="https://linkedin.com/in/matthew-cline-248036187"><SiLinkedin style={{"verticalAlign": "middle", "marginRight": "0.5vw"}}/>Linkedin</a>
                    <a className="BrowserFooterLink" href="https://github.com/mithrandirmatt"><SiIndeed style={{"verticalAlign": "middle", "marginRight": "0.5vw"}} />Indeed</a>
                    <a className="BrowserFooterLink" href="https://github.com/mithrandirmatt"><SiMonster style={{"verticalAlign": "middle", "marginRight": "0.5vw"}} />Monster</a>
                    <a className="BrowserFooterLink" href="https://github.com/mithrandirmatt"><SiGithub style={{"verticalAlign": "middle", "marginRight": "0.5vw"}} />Github</a>
                </div>
                <div className="BrowserFooterLeft">
                    <div className="BrowserFooterCopyright">
                        <FaCopyright style={{"verticalAlign": "middle", "marginRight": "0.25vw"}} />{year}
                    </div>
                </div>
                <div className="BrowserFooterMLC">
                    <div className="BrowserFooterMLCWrapper">
                        <div className="BrowserFooterM">M</div>
                        <div className="BrowserFooterL">L</div>
                        <div className="BrowserFooterC">C</div>
                        <div className="BrowserFooterResume">Resume</div>
                    </div>
                </div>
                <div className="BrowserFooterRight">
                    <div className="BrowserFooterSiteInfo">
                        {"Built with "}<SiReact style={{"verticalAlign": "middle", "marginRight": "0.25vw"}} />{" | Site By Matthew Cline"}
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowserFooter;