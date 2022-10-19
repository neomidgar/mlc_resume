

import React from 'react';

import './BrowserResume.scss';

import img1 from '../../assets/img/home_resume_img1.jpg';
import teamwork from '../../assets/img/teamwork.jpg';
import independent from '../../assets/img/independent.jpg';
import idea from '../../assets/img/idea.jpg';
import { FadeInSection } from '../../lib/FadeInSection';

import {TbSettingsAutomation, TbBulb } from 'react-icons/tb';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiJquery, SiPhp, SiNpm, SiC, SiCplusplus, SiPython, SiJava, SiCsharp, SiGnu, SiSqlite } from "react-icons/si";
import { getHorizontalScrollFromVerticalPosition, isInViewPort } from '../../lib/Utils';
import { SmoothScrollEvent } from '../../lib/SmoothScroll';
import BrowserFooter from './BrowserFooter';



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
"Drives sophistocated platforms and features utuilizing an array of back end tools, languages, and software principles.";

const SoftSkill1 = "Works well with others.";

const SoftSkill2 = "Works well Independently.";

const SoftSkill3 = "Inquisitive and deligent.";

// Info for picture:
const CodeInfo = "https://pixabay.com/images/id-647013/";
const CodeHTML = 'Image by <a href="https://pixabay.com/users/lmonk72-731125/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=647013">Lawrence Monk</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=647013">Pixabay</a>';

const CircuitBoardInfo = "https://pixabay.com/photos/board-electronics-computer-453758/";
const CircuitBoardHTML =  'Image by <a href="https://pixabay.com/users/blickpixel-52945/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=453758">Michael Schwarzenberger</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=453758">Pixabay</a>';

const TeamWorkInfo = "https://pixabay.com/photos/team-teamwork-collaboration-3393037/";
const TeamWorkHTML = 'Image by <a href="https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3393037">Alexa</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3393037">Pixabay</a>';

const MachineInfo = "https://pixabay.com/photos/bulldozer-excavator-heavy-machine-2195329/";
const MachineHTML = 'Image by <a href="https://pixabay.com/users/dimitrisvetsikas1969-1857980/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2195329">Dimitris Vetsikas</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2195329">Pixabay</a>';

const F15Info = "https://pixabay.com/photos/f-15e-strike-eagle-refueling-2452433/";
const F15HTML = 'Image by <a href="https://pixabay.com/users/military_material-5427301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2452433">Military_Material</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2452433">Pixabay</a>';

const CatSwlInfo = "https://pixabay.com/photos/excavator-heavy-equipment-51665/?download";
const CatSwlHTML = 'Image by <a href="https://pixabay.com/users/peterdargatz-5783/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=51665">Peter Dargatz</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=51665">Pixabay</a>';

const IndependentInfo = "https://pixabay.com/photos/raspberry-pi-pi-computer-4980917/";
const IndependentHTML = 'Image by <a href="https://pixabay.com/users/planet_fox-4691618/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4980917">Alexander Fox | PlaNet Fox</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4980917">Pixabay</a>';

const IdeaInfo = "https://pixabay.com/photos/bulb-light-idea-electricity-energy-5258341/";
const IdeaHTML = 'Image by <a href="https://pixabay.com/users/ajs1-13124781/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5258341">AJS1</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5258341">Pixabay</a>';

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

        const start = new Date(2014, 8, 1);
        const today = new Date();
        const Years = ((today - start) / 31556952000).toFixed(0) ;

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
                            <FadeInSection class="fade-in-up-section">
                                <TbSettingsAutomation style={{"verticalAlign": "middle", "marginRight": "1vw"}}/>
                                {"Automation Enthusiast"}
                                <TbBulb style={{"verticalAlign": "middle", "marginLeft": "3vw", "marginRight": "1vw"}}/>
                                {"Solutionist"}
                            </FadeInSection>
                        </div>
                        <div className="BrowserResumeSkillsText"><FadeInSection class="fade-in-up-section">{Skills}</FadeInSection></div>
                        <div className="BrowserResumeSkillsText2"><FadeInSection class="fade-in-up-section">{Skills2}</FadeInSection></div>
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

                <div className="BrowserResumeSoftSkillsWrapper">
                    <div className="BrowserResumeContainer">
                        <FadeInSection class="fade-in-section"><img src={teamwork} className="BrowserResumeTeamworkImg" alt={TeamWorkHTML}/></FadeInSection>
                        <FadeInSection class="fade-in-left-section"><div className="BrowserResumeTeamworkText">{SoftSkill1}</div></FadeInSection>
                    </div>
                    <div className="BrowserResumeContainer">
                        <FadeInSection class="fade-in-right-section"><div className="BrowserResumeIndependentText">{SoftSkill2}</div></FadeInSection>
                        <FadeInSection class="fade-in-section"><img src={independent} className="BrowserResumeIndependentImg" alt={IndependentHTML}/></FadeInSection>
                    </div>
                    <div className="BrowserResumeContainer">
                        <FadeInSection class="fade-in-section"><img src={idea} className="BrowserResumeTeamworkImg" alt={IdeaHTML}/></FadeInSection>
                        <FadeInSection class="fade-in-left-section"><div className="BrowserResumeTeamworkText">{SoftSkill3}</div></FadeInSection>
                    </div>
                </div>
                <div className="BrowserResumeExperience">
                    <FadeInSection class="fade-in-up-long-section">{ Years + " Years of Professional Software Development Experience"}</FadeInSection>
                </div>
                <BrowserFooter />
            </div>
        );
    }
}


export default BrowserResume;