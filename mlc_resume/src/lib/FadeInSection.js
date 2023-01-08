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

import './FadeInSection.scss';

export function FadeInSection(props) 
{
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();

    React.useEffect( () => 
    {
        const observer = new IntersectionObserver( entries => 
        {
            if( domRef.current.prevVisible === true )
            {
                entries.forEach( entry => setVisible( true ) );
            }
            else
            {
                entries.forEach( entry => 
                {
                    if( entry.isIntersecting === true )
                    {
                        domRef.current.prevVisible = true;
                    }
                    
                    setVisible( entry.isIntersecting )
                }  );
            }
        });

        observer.observe( domRef.current );

        let current = domRef.current;
      
        return () => observer.unobserve( current );
    }, []);

    return (
        <div
            className={ `${props.class} ${ isVisible ? 'is-visible' : '' }` }
            ref={ domRef }
        >
            { props.children }
        </div>
    );
  }