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

import easyScroll from 'easy-scroll';

let ScrollTimeout;
let mulitplier = 1;

export function SmoothScroll( el, e )
{
    try
    {
        let delta       = e.wheelDeltaY * -1;
        let dir         = 'bottom';
        let duration    = 4000;

        if( delta < 0 )
        {
            dir = 'top';
        }

        if( ScrollTimeout !== undefined )
        {
            mulitplier += 1;
            delta       = e.wheelDeltaY * -mulitplier;
        }

        ScrollTimeout = setTimeout( ()=> 
        {
            clearInterval( ScrollTimeout );
            ScrollTimeout = undefined;

            easyScroll(
                {
                    'scrollableDomEle': el,
                    'direction': dir,
                    'duration': duration,
                    'easingPreset': 'easeOutQuint',
                    'scrollAmount': Math.abs(delta)
                }
            );

            mulitplier = 1;

        }, 150 );
        
    }
    catch(e)
    {
        console.error(e);
    }
}

export function SmoothScrollEvent(e)
{
    try
    {
        e.preventDefault();
        e.stopPropagation();

        let el = e.currentTarget;

        SmoothScroll( el, e );

        
    }
    catch(e)
    {
        console.error(e);
    }
}