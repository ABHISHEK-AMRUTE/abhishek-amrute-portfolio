import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import ReactTypingEffect from 'react-typing-effect';
import LottieAnimation from '../lottie';
import home from '../animation/dev.json';
import Grid from '@material-ui/core/Grid';
import './About.css'


class About extends Component {


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