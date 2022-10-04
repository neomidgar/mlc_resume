
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