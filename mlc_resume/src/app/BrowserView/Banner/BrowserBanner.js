
import React from "react";
import { ToggleSlider } from "react-toggle-slider";
import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_HISTORY, ROUTE_RESUME } from "../BrowserHome";

import "./BrowserBanner.scss";

class BrowserBanner extends React.Component
{
    render()
    {

        this.onThemeToggle = (e) =>
        {
            console.log("onThemeToggle", e);
            this.props.setTheme(e);
        }

        this.onClick = (r) =>
        {
            this.props.setRoute(r);
        }

        let theme = { '--theme': "$background-color-dark" };

        if( this.props.theme === "ThemeLight" )
        {
            theme = { '--theme': "$background-color-light" };
        }

        let resumeSelected  = "";
        let historySelected = "";
        let aboutSelected   = "";
        let contactSelected = "";

        switch( this.props.route )
        {
            case ROUTE_HISTORY:
                historySelected = " RouteSelected";
                break;

            case ROUTE_ABOUT:
                aboutSelected = " RouteSelected";
                break;

            case ROUTE_CONTACT:
                contactSelected = " RouteSelected";
                break;


            default:
                resumeSelected = " RouteSelected";
        }

        return(
            <div>
                <div id={"BrowserBanner" + this.props.theme} className={ "BrowserBanner BrowserBanner" + this.props.theme }>

                    <div className="BrowserBannerMLC">
                        <div className="BrowserBannerM">M</div>
                        <div className="BrowserBannerL">L</div>
                        <div className="BrowserBannerC">C</div>
                        <div className="BrowserBannerResume">Resume</div>
                    </div>

                    <div className="BrowserBannerNavWrapper">
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme + resumeSelected } onClick={ () => this.onClick(ROUTE_RESUME) } >Resume</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme + historySelected } onClick={ () => this.onClick(ROUTE_HISTORY) } >History</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme + aboutSelected } onClick={ () => this.onClick(ROUTE_ABOUT) } >About</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme + contactSelected } onClick={ () => this.onClick(ROUTE_CONTACT) } >Contact</div>
                        </div>
                    </div>

                    <div className={ "BrowserBannerThemeToggle BrowserBannerThemeToggle" + this.props.theme }>
                        <ToggleSlider onToggle={this.onThemeToggle} />
                    </div>
                </div>
            </div>
        );
    }
}


export default BrowserBanner;