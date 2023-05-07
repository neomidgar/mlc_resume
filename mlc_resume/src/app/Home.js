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
import { BrowserRouter as Router } from 'react-router-dom';

import{ BrowserView, MobileView } from 'react-device-detect';
import BrowserHome from "./BrowserView/BrowserHome";


class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            theme: "ThemeDark"
        };
    }

    // Sets our current theme
    setTheme = ( theme ) =>
    {
        let local_theme = "ThemeDark";

        if( theme === true )
        {
            local_theme = "ThemeLight";
        }

        this.setState({ theme: local_theme });

        console.info("HOME: Setting theme to " + local_theme + ".");
    }

    render()
    {
        return(
            <div>
                <Router>
                    <BrowserView> <BrowserHome theme={this.state.theme} setTheme={this.setTheme} /> </BrowserView>
                </Router>
                <MobileView>Hi Mobile</MobileView>
            </div>
        )
    }
}

export default Home;