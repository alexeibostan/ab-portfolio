import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  icons: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PortfolioHeader({ contextUrl }) {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const resumeUrl = () => {
    const splited = i18n.language.split('-');
    const lang = splited.length > 1 ? splited[0] : i18n.language;
    return `/${contextUrl}/RESUME-Alexei-Bostan-${lang.toLowerCase()}.pdf`;
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.icons}
          color='inherit'
          aria-label='icon'
        >
          <Avatar
            alt='Alexei Bostan'
            src='https://alexeibostan.github.io/ab-portfolio/logo.png'
          />
        </IconButton>
        <Hidden smDown>
          <Typography variant='h6' component='h1' className={classes.title}>
            Alexei Bostan Portfolio
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant='h6' component='h1' className={classes.title}>
            Alexei Bostan
          </Typography>
        </Hidden>
        <Hidden smDown>
          <Link
            target='_blank'
            href='https://github.com/alexeibostan'
            color='inherit'
          >
            <IconButton
              edge='end'
              className={classes.icons}
              color='inherit'
              aria-label='github'
            >
              <GitHubIcon />
            </IconButton>
          </Link>
        </Hidden>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/alexei-bostan-6706b6a7/'
          color='inherit'
        >
          <IconButton
            edge='end'
            className={classes.icons}
            color='inherit'
            aria-label='linkedin'
          >
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Hidden smDown>
          <Link
            target='_blank'
            href='https://www.facebook.com/alexandre.lord1'
            color='inherit'
          >
            <IconButton
              edge='end'
              className={classes.icons}
              color='inherit'
              aria-label='facebook'
            >
              <Facebook />
            </IconButton>
          </Link>
        </Hidden>
        <Link
          href={resumeUrl()}
          download='RESUME-Alexei-Bostan'
          color='inherit'
        >
          RESUME
        </Link>
      </Toolbar>
    </AppBar>
  );
}
