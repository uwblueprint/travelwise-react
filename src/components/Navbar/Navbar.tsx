import React from 'react';
import {AppBar, Box, makeStyles, Theme, Tab, Tabs, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/styles';

// color values
// #71A850
// #FFFFFF

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel (props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab=${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const NavbarTabs = withStyles({
  root: {
    backgroundColor: '#FFFFFF',
  },
  indicator: {
    
    backgroundColor: '#71A850',
  },
})(Tabs);

const NavbarTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 88,
      //fontWeight: theme.typography.fontWeightRegular,
      //marginRight: theme.spacing(4),
      fontFamily: 'Nunito',
      //fontWeight: 'fontWeightBold',
      color: "#3C3C3C",
      '&:hover': {
        color: '#71A850',
        opacity: 1,
      },
      '&$selected': {
        color: '#71A850',
        //fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#71A850',
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props}/>)

interface StyledTabProps {
  label: string;
}

function RedirectToPage() {

}

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <NavbarTabs value={value} onChange={handleChange} aria-label="tabs">
          <NavbarTab label="Landing Page" /*onClick={() => history.push("/")}*/ {...a11yProps(0)}><Link to="/companies"/></NavbarTab>
          <NavbarTab label="Companies Page" /*onClick={() => history.push("/companies")}*/ {...a11yProps(1)}><Link to="/companies"/></NavbarTab>
        </NavbarTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item one
      </TabPanel>
      <TabPanel value={value} index={1}>
        Two
      </TabPanel>
    </div>
  )

}

export default Navbar;
