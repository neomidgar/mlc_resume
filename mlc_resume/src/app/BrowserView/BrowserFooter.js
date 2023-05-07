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
                        {"Built with "}<SiReact style={{"verticalAlign": "middle", "marginRight": "0.25vw"}} />{" | Site by Matthew Cline"}
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowserFooter;