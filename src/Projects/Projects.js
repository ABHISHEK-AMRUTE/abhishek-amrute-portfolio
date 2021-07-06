import React, { Component } from 'react';
import './Project.css'
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';

const aboutProjects = [
    
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/VacciBook_React/raw/main/images/main.png',
        title: 'VacciBook',
        appLink: 'https://vaccibook.netlify.com/',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/VacciBook',
        discription: 'Busy with your work? don\'t worry we will look after vaccine slots. Vaccine slot notifier with notifications and voice remainders.'
    },
    {
        urlImage: 'https://cdn.dribbble.com/users/6177536/screenshots/15465257/media/7c6632c64824f38cdf8f11b91f255c1b.png?compress=1&resize=1200x900',
        title: 'Typeracing',
        appLink: 'https://typeracer-p1.herokuapp.com/',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Typeracing',
        discription: 'Motivate by the famous game typeracer. This the clone of typeracer, where users can play type races with friends in real-time.'
    },
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Vision_Chat_API/raw/master/public/img/get_started.png',
        title: 'Vision Chat API',
        appLink: 'https://vision-chat-api.herokuapp.com/',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Vision_Chat_API',
        discription: 'A single step solution to integrate chat room feature in any application. Create real time chatroom and start chatting with your friends.'
    },
    
    {
        urlImage: 'https://play-lh.googleusercontent.com/p9X_bCSTlVOgFxmhjG8e3tRmegxhx4mxvYM48L8aHtOESFkHWRqrQPt70TE9h14m6dw=s180-rw',
        title: 'EduFree App',
        appLink: 'https://play.google.com/store/apps/details?id=com.edufree',
        gitLink:'',
        discription: 'Edufree is a online platform for Students. We provide Internships, Jobs Related to IT Fields and Programming Language Certifications.'
    },
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Multiplayer-Quiz-Games/raw/master/photos/image1.png',
        title: 'Multiplayer Quiz Game',
        appLink: 'https://github.com/ABHISHEK-AMRUTE/Multiplayer-Quiz-Games',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Multiplayer-Quiz-Games',
        discription: 'This is a multi player quiz app. Play along with your friends in real time and challenge everyone. Various categories are included.'
    },
    {
        urlImage: 'https://play-lh.googleusercontent.com/Fu2Ea8dUZ2cagS8i15s-yHbswXOas9Q3r3UQNDc732PbihLlH9YgMdvgMz0kkKUzDfQ=s180-rw',
        title: 'Motive Alarm',
        appLink: 'https://play.google.com/store/apps/details?id=com.ma.modernmotivealarm&hl=en_IN&gl=US',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Motive_Alarm',
        discription: 'New way of waking. An android App which aims to motivate you by kicking out traditional way of waking.'
    },
    
    {
        urlImage: 'https://assets.devfolio.co/hackathons/a1a6f756a52840288f27aa3185f1f7bf/projects/27171c0e12054d1f88984919a6f19950/pick01uxiqpz.jpeg',
        title: 'SMSNavi',
        appLink: 'https://www.youtube.com/watch?v=kVNG5pdVqDE&t=10s',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/SMSNavi-Hackout',
        discription: 'Lost in no where without internet? Don\'t worry SMSNavi got you covered. Navigation tool that works without Internet.'
    }
    ,
    
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Flutter-News-App/raw/master/images/image1.jpeg',
        title: 'FastNews',
        appLink: '',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Flutter-News-App',
        discription: 'This is a Flutter Based simple News Application. Based upon News.org API keeps you updated with latest news from various categories.'
    }
    ,
    
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Xmeme/blob/master/logo.png?raw=true',
        title: 'XMeme',
        appLink: 'https://memestream-xmeme.netlify.app/',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Xmeme',
        discription: 'XMeme is the meme stream and social app, where you can share and enjoy memes. You can react, post and delete memes.'
    }
    ,
    
    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/WallpaperApp/raw/master/git_images/image1.png',
        title: 'Wallpaper App',
        appLink: '',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/WallpaperApp',
        discription: 'Flutter based Wallpaper Application. The app allows you to view and download your favorite wallpaper in different orientaion and size.'
    }
    ,
    
    {
        urlImage: 'https://github.com/ShivamPrajapati-dev/utkal/raw/master/Screenshot%20from%202020-02-02%2009-08-02.png',
        title: 'Virtual Police Station',
        appLink: 'https://www.youtube.com/watch?v=8FT0EfsS69s',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/utkal',
        discription: 'VPS is a web application which helps to file a FIR from any where. Simulated virtual police station where inspector dev(the chat bot) assists.'
    },

    {
        urlImage: 'https://github.com/ABHISHEK-AMRUTE/Virtual-Lab---ASK-simulator/raw/master/screen.png',
        title: 'Virtual lab ASK simulator',
        appLink: 'https://youtu.be/ZHt-bm9s_E4',
        gitLink:'https://github.com/ABHISHEK-AMRUTE/Virtual-Lab---ASK-simulator',
        discription: 'This is a Java based app for simulating Amplitude Shift Keying(ASK) modulation and demodulation.'
    }
  

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
                                    <ProjectCard appLink={ele.appLink} gitLink={ele.gitLink} title={ele.title} urlImage={ele.urlImage} discription={ele.discription}></ProjectCard>
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