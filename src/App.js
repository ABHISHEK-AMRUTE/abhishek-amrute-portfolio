import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Buttons from './Components/Buttons';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



class App extends Component  {

  state = {
    viewVariable:0
  };
  aboutEventListner=(e) =>{
    console.log('clicked')
   

    this.setState({
      viewVariable : 0
    })
  }
   expEventListner=(e) =>{
 
    console.log('clicked')
  

    this.setState({
      viewVariable : 1
    })
  }
  projectEventListner=(e) =>{

    console.log('clicked')
   

    this.setState({
      viewVariable : 2
    })
  }
   contactEventListner=(e) =>{
 
    console.log('clicked')
   

    this.setState({
      viewVariable : 3
    })
  }

  // const classes = useStyles();

  render(){
    return (
      <div className="App">
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <div onClick={this.aboutEventListner}>
              <Buttons text="About" />
            </div>
          </Grid>
          <Grid item>
            <div onClick={this.expEventListner}>
              <Buttons text="Experience" />
            </div>
          </Grid>
          <Grid item>
            <div onClick={this.projectEventListner}>
              <Buttons text="Projects" />
            </div>
          </Grid>
          <Grid item>
            <div onClick={this.contactEventListner}>
              <Buttons text="Contact" />
            </div>
          </Grid>
        </Grid>
  
        {/* <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              PortFolio
            </Typography>
            <Button color="inherit">Abhishek Amrute</Button>
          </Toolbar>
        </AppBar> */}
       { this.state.viewVariable==0?(<About></About>):(<div/>)}
       { this.state.viewVariable==2?( <Projects></Projects>):(<div/>)}
       { this.state.viewVariable==1?(  <Experience></Experience>):(<div/>)}

       {/* <About/>
       <Projects/>
       <Experience/>
        */}
      
      </div>
    );
  }
}

export default App;
