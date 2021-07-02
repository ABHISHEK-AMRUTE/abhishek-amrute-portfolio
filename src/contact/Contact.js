import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LottieAnimation from '../lottie';
import './Contact.css'
import contact from '../animation/contact.json';
import ContactUs from './ContactUs';
import { Typography } from '@material-ui/core';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="topMargin"></div>
                <Grid container justify="center" spacing={3}>
                   
                  <Grid xs={12} sm={5}>
                   <div className="leftA"> 
                   <div className="headingContact">
                       Contact <span className="themeText"><b>Me</b></span>
                    </div>
                    {/* <ContactUs/> */}
                    <Typography>
                       <div className="secondaryText defineContact">
                       Please reach me out on <span className="themeText">abhishekamrutelfs@gmail.com</span>. Or fill the below form to send me the mail directly.
                       </div>
                    </Typography>
                   </div>
                   </Grid> 
                   
                   <Grid xs={12} sm={3}>
                   
                    <div className="lottieSize"> 
                       <LottieAnimation lotti={contact} />
                      </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contact;