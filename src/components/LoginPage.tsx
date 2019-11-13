import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
    },
    form: {
      width: '350px',
      fontFamily: 'Nunito',
    },
    submit: {
      margin: theme.spacing(1, 0, 2),
      background: '#71A850',
      fontFamily: 'Nunito',
      textTransform: 'capitalize',
      height: 48,
      fontWeight: 700,
    },
    header: {
      alignContent: 'left',
      marginBottom: theme.spacing(4),
      fontFamily: 'Nunito',
      fontWeight: 900,
    },
    signup: {
      margin: theme.spacing(0, 4, 12),
      textTransform: 'capitalize',
      fontFamily: 'Nunito',    
    },  
    label: {
      fontWeight: 700,
    },
    input: {
      height: 48,
      marginTop: '8px',
      marginBottom: '30px',
    },
    signupChild: {
      textTransform: 'capitalize',
      fontWeight: 700,
      fontFamily: 'Nunito',    
    },
  }),
);

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid className={classes.signup} container alignItems="center" justify="flex-end" spacing={2}>
            <Grid item xs>
              <Typography className={classes.signupChild} align="right">Didn't have an account yet?</Typography>
            </Grid>
            <Grid item>
              <Button 
                type="submit"
                fullWidth
                variant="outlined"
                size="large"
                href="/signup"
                className={classes.signupChild}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <form className={classes.form} noValidate>
            <Typography className={classes.header} component="h1" variant="h5" align="left">
              Log In to MemberLink.
            </Typography>
            <label className={classes.label}>Username or email</label>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              InputProps={{ className: classes.input, required: true }}
              autoFocus
            />
            <Grid container>
              <Grid item xs>
                <label className={classes.label}>Password</label>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{ className: classes.input, required: true }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              log in
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}