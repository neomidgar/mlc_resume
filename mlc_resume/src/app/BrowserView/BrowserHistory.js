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
import { getDate } from "../../lib/Utils";
import BrowserFooter from "./BrowserFooter";

import './BrowserHistory.scss';

import img_usaf from '../../assets/img/usaf.svg';
import img_F15 from '../../assets/img/F15.jpg';
import img_ccaf from '../../assets/img/ccaf.png';
import img_tb from '../../assets/img/test_bench.png';
import img_machine from '../../assets/img/mhex.jpg';


// https://commons.wikimedia.org/wiki/File:US_Air_Force_Logo_Solid_Colour.svg (USAF logo ref)

const F15Info = "https://pixabay.com/photos/f-15e-strike-eagle-refueling-2452433/";
const F15HTML = 'Image by <a href="https://pixabay.com/users/military_material-5427301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2452433">Military_Material</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2452433">Pixabay</a>';


// https://www.airforce.com/careers/detail/avionics-test-station-and-components (Avionics Job Info)

// https://www.seymourjohnson.af.mil/News/Article-Display/Article/307642/study-time-pays-off-for-new-ccaf-graduates/ (CCAF)

// https://www.youtube.com/watch?v=OOthloXLZA0 (Youtube video of MHEX full graphics display)

/*
embed you tube video
<iframe width="560" height="315" src="https://www.youtube.com/embed/OOthloXLZA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

// MHEX
// https://pixabay.com/photos/earth-304e-hydraulics-excavator-2579439/
// Image by <a href="https://pixabay.com/users/ricobino-1987569/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2579439">Rico S.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2579439">Pixabay</a>

const times =
[
    "Oct 2003",             // enter USAF
    "Jun 2004 - Oct 2009",  // USAF Responsibilities
    "Oct 2009",             // exit USAF, CCAF
    "Feb 2010",             // enter CAT
    // "Dec 2012",             // BS
    "Aug 2014",             // Caterpillar Full-time
    // "Sep 2016",             // MHEX Display Software
    // "Feb 2019",             // SWL && SSL
    // getDate("mmm yyyy")     // Present
];

const imgs =
[
    img_usaf,
    img_F15,
    img_ccaf,
    img_tb,
    img_machine

];

const img_classes =
[
    "BrowserHistoryContentUSAF",
    "BrowserHistoryContentImgF15",
    "BrowserHistoryContentImgCcaf",
    "BrowserHistoryContentImgTb",
    "BrowserHistoryContentImgMachine"

];

const oct_2003 = "On 21 October 2003 I was sworn into the United States Air Force. Several weeks later I graduated basic training and " +
"continued onto technical training. June 2004 I would finally depart to my first duty station, Seymour Johnson Air Force Base in Goldsboro North Carolina. " + 
"It was here that I would serve the remainder of my first and only tour.";

const jun_2004_2009 = <p>During my six year tour I served as an Avionics Test Stations and Components technician. The primary air frame I worked on was the F-15 Eagle. The test stations that I used supported many air frames such as the A10, C130, KC-135, B1 & B2, and several others. See the <a href='https://www.airforce.com/careers/detail/avionics-test-station-and-components'  target="_blank" rel="noopener noreferrer">2A0X1A</a> MOS for more info about my job roles during this time.</p>

const oct_2009 = <p>On 20 October 2009 my enlistment ended. I was honorably discharged, and took some much needed time off that I had accumulated throughout the years. Also, during this time I received my CCAF degree in Applied Sciences for <a href='https://www.seymourjohnson.af.mil/News/Article-Display/Article/307642/study-time-pays-off-for-new-ccaf-graduates/'  target="_blank" rel="noopener noreferrer">Avionics Systems Technology</a></p>

const feb_2010 = "Early 2010 I hired onto Belcan as a contractor to Caterpillar. During this time I was the primary lab technician and I supported a variety of projects." +
" I fabricated custom electronic test equipment, provided system integration and factory support, black box testing, and provided many other engineering support roles.";

const dec_2012 = "At the end of 2012 I completed my Bachelors of Science degree with a major in Programming Technology. Around this time my engineering support roles " +
"were growing in difficulty and migrating towards providing software related activities.";

const aug_2014 = "On Aug 1st 2014 I started as a full-time Caterpillar employee. My primary job role during this time was to take over MHEX machine software from a team in " +
"located in Japan. I added numerous new features, fixed many bugs, added diagnostic and service tool support, and combined multiple software packages into a single flash file.";

const texts = 
[
    oct_2003,
    jun_2004_2009,
    oct_2009,
    feb_2010,
    aug_2014
];

let BrowserHistoryScrollTimeout;

class BrowserHistory extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            historyIndex: 0
        };
    }

    componentDidMount()
    {
        window.addEventListener('wheel', this.wheelEvent );
    }

    componentWillUnmount()
    {
        window.removeEventListener('wheel', this.wheelEvent );
    }

    wheelEvent = (e) =>
    {
        console.log( "wheelEvent", e );

        clearTimeout( BrowserHistoryScrollTimeout );

        BrowserHistoryScrollTimeout = setTimeout( ()=>
        {
            if( e.deltaY < 0 )
            {
                let index = this.state.historyIndex;

                index = index - 1;
    
                if( index < 0 )
                {
                    index = 0;
                }

                this.setState({ historyIndex: index });
            }
            else
            {
                let index = this.state.historyIndex;

                index = index + 1;
    
                if( index > ( times.length - 1 ) )
                {
                    index = times.length - 1;
                }

                this.setState({ historyIndex: index });
            }
        }, 250 );


    }

    render()
    {
        console.log("render", this.state.historyIndex);

        const time      = times[this.state.historyIndex];
        const img       = imgs[this.state.historyIndex];
        const text      = texts[this.state.historyIndex];
        const imgClass  = img_classes[this.state.historyIndex];

        const style     = 
        {
            transform: `translateX( ${ this.state.historyIndex * 90 / (times.length -1) }vw)`
        }

        return(
            <div className="BrowserHistory">
                <div className="BrowserTimelineWrapper">
                    <div className="BrowserHistoryTimeLine"></div>
                    <div className="BrowserHistoryTimeLineContext" style={style}></div>
                    <div className="BrowserHistoryTimeText">{time}</div>
                </div>
                <div className="BrowserHistoryContentWrapper">
                    <div className="BrowserHistoryContent">
                        <div className="BrowserHistoryContent2003">
                            <img className={imgClass} src={img} alt="USAF logo" />
                            <div className="BrowserHistoryContentText">{text}</div>
                        </div>
                    </div>
                    <BrowserFooter />
                </div>
                
            </div>
        );
    }
}


export default BrowserHistory;