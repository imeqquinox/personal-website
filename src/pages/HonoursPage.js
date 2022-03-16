import React from 'react';

import ProposalPDF from '../assets/Honours Proposal.pdf';
import Dissertation from '../assets/Dissertation.pdf';

function HonoursPage() {
  return (
    <section className='page_container'> 
        <h1>Honours Project - Affective Gaming</h1>

        <div className='iframe_container'>
            <iframe className='responsive_frame' src="https://www.youtube.com/embed/rO7FT2B1M_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='honours_info'> 
            <p>
                <b>
                    Platform: Windows <br/>
                    Technology: Unity, Visual Studio 2019, GitHub, Affectiva <br/>
                    Hardware: Seeedo Hardware (Heart rate monitor, EMG), WebCam <br/>
                    Year: 2019/20 <br/>
                    Source Code: &nbsp;
                </b>
                <a href="https://github.com/imeqquinox/Honours-Project">GitHub</a> <br/>
                <b>
                    Project Grade: A <br/>
                    Dissertation Grade: B+ <br/>
                </b>
            </p>

            <p>
                My honours project is research into evaluating AI techniques using affective computing 
                solutions within video games. The aim for the project is to develop a prototype system to analyse the 
                effectiveness and accuracy of AI techniques with the use of affective sensors within video games.
            </p>

            <p>
                Objectives of the project were: 
                <ul>
                    <li>Research current AI decision making algorithms and affective models.</li>
                    <li>Determine which AI techniques could be implemented using affective sensors.</li>
                    <li>Develop a first-person prototype puzzle game for the AI system to adapt and adjust.</li>
                    <li>Project an end survey for users, to attain qualitative feedback to assess the multiple sensors.</li>
                    <li>Analyse and evaluate results for future improvements and recommendations.</li>
                </ul>
            </p>

            <span>
                Project proposal: &nbsp;
                <a href={ProposalPDF} without rel='noopener noreferrer' target='blank'>Honours Proposal</a>
            </span>
            <br/>
            <span>
                Full dissertation: &nbsp;
                <a href={Dissertation} without rel='noopener noreffer' target='blank'>Dissertation</a>
            </span>
        </div>
    </section>
  )
}

export default HonoursPage