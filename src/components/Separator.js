import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  title: {
    color: theme.palette.primary.dark,
  },
}));

export default function Separator({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h5'>
        {title}
      </Typography>
    </div>
  );
}
