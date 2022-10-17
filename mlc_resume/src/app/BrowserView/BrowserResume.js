

import React from 'react';

import './BrowserResume.scss';

import img1 from '../../assets/img/home_resume_img1.jpg';
import { FadeInSection } from '../../lib/FadeInSection';

import {TbSettingsAutomation } from 'react-icons/tb';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiJquery, SiPhp, SiNpm, SiC, SiCplusplus, SiPython, SiJava, SiCsharp, SiGnu, SiSqlite } from "react-icons/si";
import { getHorizontalScrollFromVerticalPosition, isInViewPort } from '../../lib/Utils';
import { SmoothScrollEvent } from '../../lib/SmoothScroll';



const Me = "" + 
"Highly motivated problem solver with an abundance of software " + 
"development experience.";

const Statement = "Full-Stack developer that designs, produces, and maintains " +
"scalable software solutions from development life cycle to production deployment. " +
"Proficiency in front-end and back-end coding languages, frameworks, and third-party " + 
"libraries.";

const Skills = "Adept knowledge of development and trouble shooting embedded targets. " +
"Systems integration expert. ";

const Skills2 = "Converts broad concepts into reality using modern front end technologies. " +
"Drives sophistocated platforms and features utuilizing an array of back end tools, languages, and software principles."

// Info for picture:
const CodeInfo = "https://pixabay.com/images/id-647013/";
const CodeHTML = 'Image by <a href="https://pixabay.com/users/lmonk72-731125/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=647013">Lawrence Monk</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=647013">Pixabay</a>';



class BrowserResume extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = 
        {
            codeVisible: false,
            row1Offset: -6.5,
            row2Offset: 6.5
        };

        this.divRef = React.createRef();
    }

    componentDidMount()
    {
        let el = document.getElementById('BrowserResume');
        el.addEventListener( 'wheel', SmoothScrollEvent, { passive: false } );
    }

    componentWillUnmount()
    {
        let el = document.getElementById('BrowserResume');
        el.removeEventListener( 'wheel', SmoothScrollEvent, { passive: false } );
    }

    onScroll = (e) =>
    {
        // console.log(e);

        if( !this.state.codeVisible )
        {
            this.setState({ codeVisible: true });
        }

        let row1 = document.getElementById('BrowserResumeSkillsIconRow1');
        let row2 = document.getElementById('BrowserResumeSkillsIconRow2');

        if( row1 !== null )
        {
            if( isInViewPort( row1 ) )
            {
                let offset = getHorizontalScrollFromVerticalPosition( 6.5, row1, 'right', 0.15, 1 );

                this.setState({ row1Offset: offset });
            }

            if( isInViewPort( row2 ) )
            {
                let offset = getHorizontalScrollFromVerticalPosition( 6.5, row2, 'left', 0.15, 1 );

                this.setState({ row2Offset: offset });
            }
        }
    }

    render()
    {
        let imgWrapperClass = "BrowserResumeSkillsImgWrapper";

        if( this.state.codeVisible === true )
        {
            imgWrapperClass += " BrowserResumeSkillsImgWrapperAnimation";
        }

        const { row1Offset, row2Offset } = this.state;

        const row1Style = { transform: `translateX(${row1Offset}vw)` };
        const row2Style = { transform: `translateX(${row2Offset}vw)` };

        return(
            <div id="BrowserResume" className="BrowserResume" onScroll={this.onScroll} ref={this.divRef}>
                <div className={ "BrowserResumeMeWrapper BrowserResumeMeWrapper" + this.props.theme }>
                    <div className="BrowserResumeMe">Matthew Cline</div>
                    <div className="BrowserResumeAbout">{Me}</div>
                </div>
                <div className={ "BrowserResumeMeWrapper BrowserResumeMeWrapper" + this.props.theme }>
                    <div className={ "BrowserResumeStatement " + this.props.theme }>{Statement}</div>
                </div>
                <div className={ "BrowserResumeSkills BrowserResumeSkills" + this.props.theme }>

                    <div className="BrowserResumeSkillsWrapper">
                        <div className="BrowserResumeSkillsProText">
                            <FadeInSection>
                                <TbSettingsAutomation style={{"verticalAlign": "middle", "marginRight": "1vw"}}/>
                                {"Automation Enthusiast"}
                            </FadeInSection>
                        </div>
                        <div className="BrowserResumeSkillsText"><FadeInSection>{Skills}</FadeInSection></div>
                        <div className="BrowserResumeSkillsText2"><FadeInSection>{Skills2}</FadeInSection></div>
                    </div>

                    
                    <div id="BrowserResumeSkillsIconRow1" className="BrowserResumeSkillsIconRow1" style={row1Style}>
                        <SiJavascript className="ResumeSkillIcon"/>
                        <SiHtml5 className="ResumeSkillIcon"/>
                        <SiCss3 className="ResumeSkillIcon"/>
                        <SiReact className="ResumeSkillIcon"/>
                        <SiJquery className="ResumeSkillIcon"/>
                        <SiPhp className="ResumeSkillIcon"/>
                        <SiNpm className="ResumeSkillIcon"/>
                    </div>
                    

                    <div id="BrowserResumeSkillsIconRow2" className="BrowserResumeSkillsIconRow2" style={row2Style}>
                        <SiC className="ResumeSkillIcon"/>
                        <SiCplusplus className="ResumeSkillIcon"/>
                        <SiCsharp className="ResumeSkillIcon"/>
                        <SiPython className="ResumeSkillIcon"/>
                        <SiJava className="ResumeSkillIcon"/>
                        <SiGnu className="ResumeSkillIcon"/>
                        <SiSqlite className="ResumeSkillIcon"/>
                    </div>

                </div>
                <div className={imgWrapperClass}>
                    <img className="BrowserResumeSkillsImg" src={img1} alt={CodeHTML}/>
                </div>
            </div>
        );
    }
}


export default BrowserResume;