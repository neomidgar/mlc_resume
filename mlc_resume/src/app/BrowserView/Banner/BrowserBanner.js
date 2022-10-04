
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
            theme = { '--theme': "$background-color-leight" };
        }

        return(
            <div>
                <div className={ "BrowserBanner BrowserBanner" + this.props.theme }>

                    <div className="BrowserBannerNavWrapper">
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme } onClick={ () => this.onClick(ROUTE_RESUME) } >Resume</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme } onClick={ () => this.onClick(ROUTE_HISTORY) } >History</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme } onClick={ () => this.onClick(ROUTE_ABOUT) } >About</div>
                        </div>
                        <div className={ "BrowserBannerNavItem BrowserBannerNavItem" + this.props.theme } style={theme}>
                            <div className={ "BrowserBannerNavText BrowserBannerNavText" + this.props.theme } onClick={ () => this.onClick(ROUTE_CONTACT) } >Contact</div>
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