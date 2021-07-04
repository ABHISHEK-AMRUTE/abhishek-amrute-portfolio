import React, { Component } from 'react';
import './Experience.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const internships = [
    {
        title: 'Associate Software Engineer',
        company: 'MAQ Software',
        Discription: 'Worked closely with the customer-facing team to deliver optimisations in Power BI reports which improved the loading time by 40 %.',
        time: '05/2022 - 07/2022'
    },
    {
        title: 'Web Developer Intern',
        company: 'DOTS',
        Discription: 'Delivered an optimised Healthcrum Chat Application, that perfectly aligns with the client requirements in two months. Used Node.js, Express.js, MongoDB and Socket.io for the backend. Frontend on HTML/CSS, PeerJS, Bootstrap and JavaScript. Also Implemented one-to-one and group chats along with video calls.',
        time: '05/2021 - 07/2021'
    },
    {
        title: 'Android Developer Intern',
        company: 'Professional Cipher',
        Discription: 'Created EduFree App (Educational App). Tech stack includes Java, Firebase Firestore and Rtdb, and some open source libraries. Also implemented In-app billing and referral system.'
        ,
        time: '05/2021 - 07/2021'
    }
]

const hackathons = [
    {
        title: 'First Prize Winner',
        company: 'UtkalHacks 2.0',
        Discription: 'Won First prize at UtkalHacks 2.0. We worked upon building Virtual Police Station which can simulate the environment of a police station. The chat bot inspector Dev assists the process of filing a FIR virtually.'
    },
    {
        title: 'CodeAsylums category winner',
        company: 'VersionBeta 3.0',
        Discription: 'Won first prize in CodeAsylums category at VersionBeta 3.0 conducted by MANIT. We developed an android app which can provide you navifation without internet. We called it SMSNavi. It is useful in low or no internet ares. Backend by simple UI and robust backend any one can use this app.'
       
    },
    {
        title: 'Runner-up Prize Winner',
        company: 'UNSCRIPT 2k20',
        Discription: 'Won runner up prize at UNSCRIPT. We developed an android app called MediScan which was able to detect wound type on the basis of its severity. It is also able to notify near by hospital. We can feed important numbers in it, so that in case of emergency the app could cocntact on those numbers.'
    },
]

class Experience extends Component {
    render() {
        return (
            <div>
                <div className="headingText">
                    <div className="heading">My Professional <span className="themeText"><b>Experiences</b></span></div>
                  <div className="secondaryText">  Here are my professional experiences</div>
                </div>

                <Grid container spacing={2} className="experienceGrid">

                    <Grid item xs={12} sm={6}>
                        <h1 className="secondaryText">Internships</h1>
                        <Timeline >



                            {
                                internships.map((ele) => (
                                    <TimelineItem key={ele}>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>

                                            <Accordion className="jobCard">
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <div>
                                                    <h3 className="themeText">{ele.title}</h3>{ele.company}
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <div className="secondaryText"> {ele.time}<br></br><br></br>
                                                    <Typography>
                                                       
                                                        
                                                          {ele.Discription}
                                                     
                                                    </Typography>  </div>
                                                </AccordionDetails>
                                            </Accordion>

                                            
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }

                        </Timeline>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <h1 className="secondaryText">Hackathons</h1>
                        <Timeline align="right">
                        {
                                hackathons.map((ele) => (
                                    <TimelineItem key={ele}>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>

                                            <Accordion className="jobCard">
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <div>
                                                    <h3 className="themeText">{ele.title}</h3>{ele.company}
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography >
                                                       <div className="secondaryText">
                                                          {ele.Discription}
                                                       </div>
                                                       
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </Timeline>
                    </Grid>


                </Grid>



            </div>
        );
    }
}

export default Experience;