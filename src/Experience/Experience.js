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
        Discription: '',
        time: '05/2022 - 07/2022'
    },
    {
        title: 'Web Developer Intern',
        company: 'DOTS',
        Discription: '• Built a Healthcrum Chat application.\n• Used Node.js, Express.js, MongoDB and Socket.io for backend.\n• Frontend on HTML/CSS, PeerJS, Bootstrap and JavaScript.\n• Implemented one-to-one and group chats along with video calls.',
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
        Discription: ''
    },
    {
        title: 'CodeAsylums category winner',
        company: 'VersionBeta 3.0',
        Discription: ''
       
    },
    {
        title: 'Runner-up Prize Winner',
        company: 'UNSCRIPT 2k20',
        Discription: ''
    },
]

class Experience extends Component {
    render() {
        return (
            <div>
                <div className="headingText">
                    <h1>My Professional <span className="themeText">Experiences</span></h1>
                    Here are my professional experiences
                </div>

                <Grid container spacing={2} className="experienceGrid">

                    <Grid item xs={12} sm={6}>
                        <h1>Internships</h1>
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
                                                    <Typography>
                                                        {ele.time}<br></br>
                                                       {ele.Discription}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }

                        </Timeline>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <h1>Hackathons</h1>
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
                                                    <Typography>
                                                       
                                                       {ele.Discription}
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