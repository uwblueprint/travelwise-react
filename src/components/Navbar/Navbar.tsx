import React from 'react';
import {AppBar, Box, makeStyles, Theme, Tab, Tabs} from '@material-ui/core';
import {Link, RouteComponentProps} from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/styles';

import "./Navbar.css"

import logo from "./TravelWise.jpg"

// color values
// #71A850
// #FFFFFF
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  TabsRoot: {
    backgroundColor: '#FFFFFF',
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

}));

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  //history: History
}


function Navbar(/*props: React.SFC<ChildComponentProps>*/) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      {/*<img src={logo} /*style={{width: 300, height: 20}}/>*/}

      <AppBar position="static">
        

        <Tabs classes={{root: classes.TabsRoot, indicator: classes.TabsIndicator}} value={value} onChange={handleChange} aria-label="tabs">
          
          {/*<Link to="/">*/}<Tab classes={{root: classes.TabRoot}} label="Landing Page" /*onClick={() => history.push("/")}*//>{/*</Link>*/}
  {/*<Link to="/companies">*/}<Tab classes={{root: classes.TabRoot}} label="Companies Page" /*onClick={() => history.push("/companies")}*//>{/* </Link>*/}
          
        </Tabs>
      </AppBar>
    </div>
  )

}

export default Navbar;
