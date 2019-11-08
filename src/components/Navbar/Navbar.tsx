import React from 'react';
import {AppBar, Avatar, Box, Grid, makeStyles, Theme, Tab, Tabs, Typography} from '@material-ui/core';
import {Link, RouteComponentProps} from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/styles';

import "./Navbar.css"

import logo from "./TravelwiseLogo.svg";

// color values
// #71A850
// #FFFFFF
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  AppBarRoot: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  TabsRoot: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    flexGrow: 2
  },
  TabsIndicator: { 
    backgroundColor: '#71A850',
  },
  TabRoot: {
    textTransform: 'none',
    minWidth: 88,
    fontFamily: 'Nunito',
    color: "#3C3C3C",
    '&:hover': {
      color: '#71A850',
      opacity: 1,
    },
    '&$selected': {
      color: '#71A850',
    },
    '&:focus': {
      color: '#71A850',
    },
  },
  TabsSelected: {},
  UserGrid: {
    display: 'flex',
    flexDirection: 'row'
  },
  AvatarStyle: {

  }
}));

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>

      <AppBar classes={{root: classes.AppBarRoot}} position="static">
        <img src={logo} style={{width: 150, height: 50}} />
        <div style={{flexGrow: 2}}/>
        <Tabs classes={{root: classes.TabsRoot, indicator: classes.TabsIndicator}} value={value} onChange={handleChange} aria-label="tabs">
          <Tab classes={{root: classes.TabRoot}} component={Link} to="/" label="Landing Page" />
          <Tab classes={{root: classes.TabRoot}} component={Link} to="/companies" label="Companies Page"/>
        </Tabs>
        <div style={{flexGrow: 2}}/>
        <Grid classes={{root: classes.UserGrid}}>
            <Typography>aslkjfd;asd</Typography>
            <Avatar>TW</Avatar>
          </Grid>
      </AppBar>
    </div>
  )

}

export default Navbar;
