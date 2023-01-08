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

export function isInViewPort( el, topOffset, bottomOffset )
{
    try
    {
        const rect = el.getBoundingClientRect();

        const { top, bottom } = rect;

        let cutoffTop = 0;
        let cutoffBottom = window.innerHeight;
        
        if( !isNaN( topOffset ) )
        {
            cutoffTop = window.innerHeight * topOffset;
        }

        if( !isNaN( bottomOffset ) )
        {
            cutoffBottom = window.innerHeight * bottomOffset;
        }

        if
        ( 
            top < cutoffBottom &&
            bottom > cutoffTop
        )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch(e)
    {
        console.error(e);
    }
}

export function getHorizontalScrollFromVerticalPosition( maxScrollX, el, dir, topOffset, bottomOffset )
{
    try
    {
        const rect = el.getBoundingClientRect();

        const { top, bottom } = rect;

        const mid           = (top + bottom ) / 2;

        let cutoffTop       = 0;
        let cutoffBottom    = window.innerHeight;
        let maxScroll       = maxScrollX;
        
        if( !isNaN( topOffset ) )
        {
            cutoffTop       = window.innerHeight * topOffset;
        }

        if( !isNaN( bottomOffset ) )
        {
            cutoffBottom    = window.innerHeight * bottomOffset;
        }

        let cutoffMid       = (cutoffTop + cutoffBottom ) / 2;
        let percent         = 0;
        let offset          = 0;

        if( mid < cutoffMid )
        {
            offset          = cutoffMid - mid;
            percent         = ( offset * 100 / cutoffMid );
        }
        else
        {
            offset          = mid - cutoffMid;
            percent         = ( offset * 100 / cutoffMid ) * -1;
        }

        let ret             = maxScroll * percent / 100;

        if( dir === 'left' )
        {
            ret             = ret * -1;
        }

        return ret;
    }
    catch(e)
    {
        console.error(e);
    }
}

export function clamp( min, max, val )
{
    try
    {
        return Math.min( Math.max( val, min ), max );
    }
    catch(e)
    {
        console.error(e);

        return val;
    }
}

const months = 
[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

export function getMonth( date, format )
{
    try
    {
        switch( format )
        {
            case "mmm":
                return months[date.getMonth()];

            default:
                return date.getMonth();
        }
    } 
    catch(e)
    {
        console.error(e);
    }
}

export function getDate( format )
{
    try
    {
        const date = new Date();

        switch( format )
        {
            case "mmm yyyy":
            
            let month = getMonth( date, "mmm" );
            let year  = date.getFullYear();

            return month + " " + year;

            default:
                return date;
        }
    }
    catch(e)
    {
        console.error(e);
    }
}