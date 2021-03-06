import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import ReactTypingEffect from 'react-typing-effect';
import LottieAnimation from '../lottie';
import home from '../animation/dev.json';
import Grid from '@material-ui/core/Grid';
import './About.css'



// import dribbble from '../Assets/dribbble.svg'
// import github from '../Assets/github.svg'
// import googlePlayStore from '../Assets/playstore.svg'
// import linkedin from '../Assets/linkedin.svg'



class About extends Component {

    // drilink = (e) => window.open('https://dribbble.com/abhishek_bt18', '_blank');
    // githublink = (e) => window.open('https://github.com/ABHISHEK-AMRUTE', '_blank');
    // gpslink = (e) => window.open('https://play.google.com/store/apps/developer?id=ABHISHEK+AMRUTE&hl=en_IN&gl=US', '_blank');
    // linkedinLink = (e) => window.open('https://www.linkedin.com/in/abhishek-amrute-33808a172/', '_blank');
    downloadResume =(e) =>  window.open('https://drive.google.com/uc?id=1uckkX0jwBKvrZY6U2vkkEb-Sl_kLtuMG&export=download', '_blank');
    

    render() {
        const classes = withStyles();

        return (
            <div>

                {/* About Body Top */}
                <Grid container spacing={3} className="bodyTopAlignment">
                    <Grid xs={12} sm={6}>
                        <div className="leftAlign">

                            <div className="nameHeading secondaryText">
                                Hi There!<br></br>
                                I Am <span className="themText"> <b>Abhishek Amrute</b></span><br></br>
                                <span className="blackHeading"> <ReactTypingEffect
                                    text={['Software Developer', 'MERN Stack Developer', 'Android Developer']}
                                /></span>

                            </div>

                            <div className="topMarginAbout">

                                <Grid container justify="left" spacing={3}>
                                    
                                    <Grid item>
                                        
                                      <button onClick={this.downloadResume} className="resumeButton"> Download CV</button>
                                    </Grid>
                                    
                                     
                                </Grid>
                            </div>

                        </div>

                    </Grid>
                    <Grid xs={12} sm={6}>
                        <div className="lottieSize"> <LottieAnimation lotti={home} />
                      
                        </div>
                     
                    </Grid>
                </Grid>




            </div>
        );
    }
}

export default About;