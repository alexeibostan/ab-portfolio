import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ProjectChip({ skill }) {
  const classes = useStyles();

  return (
    <Chip
      className={classes.chip}
      variant='outlined'
      avatar={<Avatar>{skill.ext}</Avatar>}
      label={skill.title}
    ></Chip>
  );
}
