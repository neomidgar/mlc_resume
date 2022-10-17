
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
            className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }
            ref={ domRef }
        >
            { props.children }
        </div>
    );
  }