import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import ProjectChip from './ProjectChip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 272,
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  chipContainer: {
    marginTop: theme.spacing(1.3),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function ProjectCard({ project, onMoreAction }) {
  const classes = useStyles();

  const getSubheader = ({ type, year }) => {
    return type + ' ' + year;
  };

  const parseBodyText = (text) => {
    return text.length >= 115 ? text.slice(0, 90) + '...' : text;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {project.company.slice(0, 2).toUpperCase()}
          </Avatar>
        }
        title={project.title}
        subheader={getSubheader(project)}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='body2' color='textSecondary' component='p'>
          {parseBodyText(project.description)}
        </Typography>
        <Grid
          className={classes.chipContainer}
          container
          direction='column'
          justify='center'
          alignItems='flex-start'
        >
          {project.skills.slice(0, 5).map((skill, index) => (
            <ProjectChip key={index} skill={skill} />
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary' onClick={() => onMoreAction()}>
          ALTRO
        </Button>
      </CardActions>
    </Card>
  );
}
