import React from "react";
import {
  AppBar,
  Avatar,
  ClickAwayListener,
  Grow,
  Hidden,
  IconButton,
  MenuList,
  MenuItem,
  makeStyles,
  Paper,
  Popper,
  Tab,
  Tabs,
  Typography,
  Toolbar
} from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "./TravelwiseLogo.svg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF"
  },
  AppBarRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#FFFFFF"
  },
  Logo: {
    width: 150,
    height: 50,
    padding: 5
  },
  TabsRoot: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    flexGrow: 1.5
  },
  TabsIndicator: {
    backgroundColor: "#71A850"
  },
  TabRoot: {
    textTransform: "none",
    minWidth: 90,
    fontFamily: "Nunito",
    color: "#3C3C3C",
    "&:hover": {
      color: "#71A850",
      opacity: 1
    },
    "&$selected": {
      color: "#71A850"
    },
    "&:focus": {
      color: "#71A850"
    }
  },
  TabsScroller: { display: "flex" },
  UserGrid: {
    display: "flex",
    flexDirection: "row",
    border: 0,
  },
  CompanyName: {
    fontFamily: "Nunito",
    padding: 10,
    color: "#888888"
  }
}));


const DropdownStyle ={
  top: "100%",
  left: "auto",
  width: "200px",
  right: "25px"
}

const IconStyle ={
  flex: "0 0 auto",
  color: "rgba(0, 0, 0, 0.54)",
  padding: "12px",
  overflow: "visible",
  fontSize: "1.5rem",
  transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "0%"
}

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar classes={{ root: classes.AppBarRoot }} position="static">
        <Hidden xsDown implementation="css">
          <img src={logo} alt={"Travelwise"} className={classes.Logo} />
        </Hidden>

        <div style={{ flexGrow: 2 }} />

        <Tabs
          classes={{
            root: classes.TabsRoot,
            indicator: classes.TabsIndicator,
            scroller: classes.TabsScroller
          }}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab
            classes={{ root: classes.TabRoot }}
            component={Link}
            to="/"
            label="Landing"
          />
          <Tab
            classes={{ root: classes.TabRoot }}
            component={Link}
            to="/companies"
            label="Companies"
          />
        </Tabs>

        <Toolbar>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={IconStyle}
              >
                <Typography className={classes.CompanyName}>
                  Company Name
                </Typography>
                <Avatar>TW</Avatar>
          </IconButton>
          <Popper open={open} style={DropdownStyle} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem component={Link} to="/profile">Profile</MenuItem>
                  <MenuItem component={Link} to="/logout">Log Out</MenuItem>
                </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
