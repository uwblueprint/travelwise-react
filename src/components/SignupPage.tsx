import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      height: '100vh',
      fontFamily: 'Nunito',
    },
    image: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1445873014904-7dc044bd92db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(4, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Nunito',
    },
    form: {
      width: '350px',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: '#71A850',
      fontFamily: 'Nunito',
    },
    header: {
      alignContent: 'left',
      marginBottom: theme.spacing(4),
      fontFamily: 'Nunito',
    },
    signup: {
      margin: theme.spacing(0, 4, 4),
      fontFamily: 'Nunito',    
    },  
  }),
);

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image}>
        <img src="../assets/tw_logo.png" />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid className={classes.signup} container alignItems="center" justify="flex-end" spacing={2}>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                size="large"
                href="/login"
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate>
            <Typography className={classes.header} component="h1" variant="h5" align="left">
              Get Started.
            </Typography>
            <label>Username or email</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              placeholder="team@company.com"
              autoComplete="email"
              autoFocus
            />
            <Grid container>
              <Grid item xs>
                <label>Password</label>
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="6+ characters"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <label>Confirm Password</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="Re-enter your password"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <label>Access code</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="Enter code to verify your account"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Get started now
            </Button>
            <label>By clicking "Get started now" I agree to Travelwise's Terms of Service and Privacy Policy</label>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}