import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    color: theme.palette.primary.dark,
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
  },
}));

export default function Description() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Grid container alignItems='center' justify='flex-start'>
        <Typography className={classes.title} variant='h3'>
          {t('title')}
        </Typography>
      </Grid>
      <Grid
        className={classes.subtitle}
        container
        alignItems='center'
        justify='flex-start'
      >
        <Typography variant='body1'>
          {t('subtitle')}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
