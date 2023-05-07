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

import {BsMouse} from 'react-icons/bs';

import './ScrollPrompt.scss';

const SCROLL_PROMPT_ENTRY_DELAY_DEFAULT     = 5;
const SCROLL_PROMPT_INPUT_DELAY_DEFAULT     = 15;

class ScrollPrompt extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            show: "",
            has_scrolled: false,
            entry_flag: false,
            at_bottom: false
        };
    }

    componentDidMount()
    {
        clearInterval( this.interval );

        this.timer = 0;

        // Count up our time.
        this.interval = setInterval( ()=>
        {
            this.timer = this.timer + 1;

            this.checkTimer();
        }, 1000 );

        window.addEventListener('wheel', this.notifyScrollChange );

        this.checkTimer();
    }

    componentWillUnmount()
    {
        clearInterval( this.interval );

        window.removeEventListener('wheel', this.notifyScrollChange );
    }

    resetTimer = (e) =>
    {
        console.log("resetTimer");

        this.setState({ has_scrolled: true })

        this.checkTimer( true );
    }

    checkTimer = ( reset ) =>
    {
        let entry_delay     = SCROLL_PROMPT_ENTRY_DELAY_DEFAULT;
        let input_delay     = SCROLL_PROMPT_INPUT_DELAY_DEFAULT;

        if( typeof this.props.entryDelay === 'number' )
        {
            entry_delay = this.props.entryDelay;
        }

        if( typeof this.props.inputDelay === 'number' )
        {
            input_delay = this.props.inputDelay;
        }

        if( reset )
        {
            this.timer = entry_delay;
        }

        let show = "ScrollPrompt";

        if( this.state.at_bottom )
        {console.log("at bottom")
            show = "ScrollPromptHide";
        }
        else if( !this.state.entry_flag && this.timer >= entry_delay )
        {console.log("not entry")
            // Set one-time flag
            this.setState({ entry_flag: true });
        }
        else if( this.state.has_scrolled && this.timer < ( input_delay + entry_delay ) )
        {console.log("has scrolled", this.timer)
            show = show + " ScrollPromptHide";
        }
        else if( this.timer <= entry_delay )
        {console.log("less than entry delay", this.timer)
            show = "ScrollPromptHide";
        }

        this.setState({ show: show });
    }

    notifyScrollChange = (e) =>
    {
        this.resetTimer();

        let scrollTop       = e.target.scrollTop;
        let scrollHeight    = e.target.scrollHeight;
        let offsetHeight    = e.target.offsetHeight;

        if( ( scrollTop + offsetHeight ) > ( scrollHeight * 0.95 ) )
        {
            this.setState({ at_bottom: true });
        }
        else
        {
            this.setState({ at_bottom: false });
        }
    }

    render()
    {
        if( this.state.show !== "ScrollPromptHide")
        {
            return(
            
                <div className={this.state.show}>
                    {
                        this.props.mouse &&
                        <BsMouse className='ScrollPromptImg'/>
                        
                    }
                    <div>
                        <div className='ScrollPromptChevron'></div>
                        <div className='ScrollPromptChevron'></div>
                        <div className='ScrollPromptChevron'></div>
                    </div>
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}

export default ScrollPrompt;