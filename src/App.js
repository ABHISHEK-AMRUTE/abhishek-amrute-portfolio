import logo from './logo.svg';
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


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Buttons text="About"/>
        </Grid>
        <Grid item>
          <Buttons text="Experience"/>
        </Grid>
        <Grid item>
          <Buttons text="Projects"/>
        </Grid>
        <Grid item>
          <Buttons text="Contact"/>
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
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
}

export default App;
