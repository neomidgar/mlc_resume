
import React from "react";


export const FADE_TYPE_IN_OUT_VIEW = 0;

class FadeInOut extends React.Component
{

    render()
    {
        const { content, classes } = this.props;

        let local_content = "";
        let local_classes = "";

        if( content !== undefined )
        {
            local_content = content;
        }

        if( classes !== undefined )
        {
            local_classes = classes;
        }

        return(
            <div className={"FadeInOut " + local_classes}>{local_content}</div>
        );
    }
}

export default FadeInOut;