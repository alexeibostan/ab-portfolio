import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ProjectChip from './ProjectChip';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 272,
    padding: theme.spacing(3),
  },
  chipContainer: {
    marginTop: theme.spacing(1.3),
  },
  descContainer: {
    marginTop: theme.spacing(1.3),
  },
  companyInfo: {
    marginTop: theme.spacing(1.3),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function ProjectDetail({ project }) {
  const classes = useStyles();

  if (!project) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h6'>{project.title}</Typography>
        <Typography color='secondary' variant='subtitle1'>
          {project.type}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.companyInfo}>
        <Typography variant='subtitle2'>
          {project.company} {project.year}
        </Typography>
        <Typography variant='subtitle2'>{project.client}</Typography>
        <Typography variant='subtitle2'>{project.role}</Typography>
      </div>

      <div className={classes.descContainer}>
        <Typography variant='body1'>{project.description}</Typography>
      </div>

      <Grid
        className={classes.chipContainer}
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        {project.skills.map((skill, index) => (
          <ProjectChip key={index} skill={skill} />
        ))}
      </Grid>
    </div>
  );
}
