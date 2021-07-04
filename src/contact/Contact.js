import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LottieAnimation from '../lottie';
import './Contact.css'
import contact from '../animation/contact.json';
import ContactUs from './ContactUs';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';

class Contact extends Component {

    state = {
        email: 'sample@gmail.com',
        message: 'Type your message here.',
        alert: 0,
        sent: 0
    }

    sendEmail = () => {

        if (this.state.email === "" || this.state.message === "") {
            this.setState({
                alert: 1
            })
        }
        else {
            (function () {
                emailjs.init("user_wWUgg4Jis66ptcOyTitTC");
            })();

            var templateParams = {
                to_name: 'Abhishek Amrute',
                from_name: this.state.email,
                message_html: this.state.message
            };

            emailjs.send('service_2ufc668', 'template_ix4el4o', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);


                }, function (error) {
                    console.log('FAILED...', error);
                });

            this.setState({
                alert: 0,
                sent: 1
            })
        }

    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
        this.setState({
            alert: 0,
            sent: 0
        })
    }
    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
        this.setState({
            alert: 0,
            sent: 0
        })
    }

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


                            <div className="secondaryText defineContact">
                                <Typography>  Please reach me out on <span className="themeText">abhishekamrutelfs@gmail.com</span>. Or fill the below form to send me the mail directly.
                                </Typography>


                                <div className="textBox" ><TextField className="textBoxInside" onChange={this.onEmailChange} id="email" label="Email" value={this.state.email} variant="outlined" required /><br></br>
                                    <TextField multiline rows={5} className="textBoxInside" onChange={this.onMessageChange} id="message" label="Message" variant="outlined" value={this.state.message} required /></div><br></br>
                                {this.state.alert == 1 ? (<Alert variant="filled" severity="error">
                                    Fields cannot be empty.
                                </Alert>) : <div />}
                                {this.state.sent == 1 ? (<Alert variant="filled" severity="success">
                                    Message Sent
                                </Alert>) : <div />}
                                <div className="sendButton">
                                    <Button onClick={this.sendEmail} variant="contained" color="primary">
                                        Send Mail
                                    </Button></div></div>

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