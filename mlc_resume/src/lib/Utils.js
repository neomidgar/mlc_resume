




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