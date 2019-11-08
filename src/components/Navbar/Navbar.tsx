import React from 'react';
import {AppBar, Avatar, Hidden, makeStyles, Theme, Tab, Tabs, Typography, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

import logo from "./TravelwiseLogo.svg";

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
  Logo: {
    width: 150,
    height: 50,
    padding: 5
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
    flexDirection: 'row',
    border: 0
  },
  
  CompanyName: {
    fontFamily: 'Nunito',
    padding: 10,
    color: "#888888"
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

        <Hidden xsDown implementation="css">
          <img src={logo} alt={"Travelwise"} className={classes.Logo}/>
        </Hidden>

        <div style={{flexGrow: 2}}/>

        <Tabs classes={{root: classes.TabsRoot, indicator: classes.TabsIndicator}} value={value} onChange={handleChange} aria-label="tabs">
          <Tab classes={{root: classes.TabRoot}} component={Link} to="/" label="Landing" />
          <Tab classes={{root: classes.TabRoot}} component={Link} to="/companies" label="Companies"/>
        </Tabs>

        <Toolbar>
          <Hidden xsDown implementation="css">
            <Typography className={classes.CompanyName}>Company Name</Typography>
          </Hidden>
          <Avatar>TW</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default Navbar;
