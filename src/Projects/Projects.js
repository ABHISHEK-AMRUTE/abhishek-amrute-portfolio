import React, { Component } from 'react';
import './Project.css'
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';

const aboutProjects = [
    {
        urlImage: 'https://play-lh.googleusercontent.com/Fu2Ea8dUZ2cagS8i15s-yHbswXOas9Q3r3UQNDc732PbihLlH9YgMdvgMz0kkKUzDfQ=s180-rw',
        title: 'Motive Alarm',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Motive_Alarm',
        discription: 'New way of waking. An android App which aims to motivate you by kicking out traditional way of waking.'
    },
    {
        urlImage: 'https://cdn.dribbble.com/users/6177536/screenshots/15465257/media/7c6632c64824f38cdf8f11b91f255c1b.png?compress=1&resize=1200x900',
        title: 'Typeracing',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Typeracing',
        discription: 'Motivate by the famous game typeracer. This the clone of typeracer, where users can play type races with friends in real-time.'
    },
    {
        urlImage: 'https://assets.devfolio.co/hackathons/a1a6f756a52840288f27aa3185f1f7bf/projects/27171c0e12054d1f88984919a6f19950/pick01uxiqpz.jpeg',
        title: 'SMSNavi',
        gitLink:'',
        discription: 'Lost in no where without internet? Don\'t worry SMSNavi got you covered. Navigation tool that works without Internet.'
    },
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Vision_Chat_API/raw/master/public/img/get_started.png',
        title: 'Vision Chat API',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Vision_Chat_API',
        discription: 'A single step solution to integrate chat room feature in any application. Create real time chatroom and start chatting with your friends.'
    },
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Multiplayer-Quiz-Games/raw/master/photos/image1.png',
        title: 'Multiplayer Quiz Game',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Multiplayer-Quiz-Games',
        discription: 'This is a multi player quiz app. Play along with your friends in real time and challenge everyone. Various categories are included.'
    },
    {
        urlImage: 'https://www.gstatic.com/webp/gallery/3.jpg',
        title: 'VacciBook',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/VacciBook',
        discription: 'Busy with your work? don\'t worry we will look after vaccine slots. Vaccine slot notifier with notifications and voice remainders.'
    },

]



class Projects extends Component {
    render() {
        return (
            <div>
                <div className="headingText">

                    <div className="heading">My Recent <span className="themeText"><b>Works</b></span></div>
                  <div className="secondaryText">      Here are my recent project that I worked upon</div>
                </div>

            
                <div className="projectGrid">
                    <Grid item xs={12} >
                        <Grid container justify="center" spacing={2}>
                            {aboutProjects.map((ele) => (
                                <Grid key={ele} item>
                                    <ProjectCard gitLink={ele.gitLink} title={ele.title} urlImage={ele.urlImage} discription={ele.discription}></ProjectCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default Projects;