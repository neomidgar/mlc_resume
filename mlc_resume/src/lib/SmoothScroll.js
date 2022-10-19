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