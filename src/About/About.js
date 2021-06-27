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

                            <h1>
                                Hi There!<br></br>
                                I Am <span className="themText"> Abhishek Amrute</span><br></br>
                                <ReactTypingEffect
                                    text={['Software Developer', 'MERN Stack Developer', 'Android Developer']}
                                />
                            </h1>
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