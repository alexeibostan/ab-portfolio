import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider } from '@material-ui/styles';

import ProjectCard from './components/ProjectCard';
import Separator from './components/Separator';
import Description from './components/Description';
import ProjectDetail from './components/ProjectDetail';
import PortfolioHeader from './components/PortfolioHeader';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2F5597',
    },
    secondary: {
      main: '#ED7D31',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bodyContainer: {
    padding: theme.spacing(3),
    marginTop: 64,
  },
  drowerCloseButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
  },
}));

const contextUrl = 'ab-portfolio';

const initialState = {
  projects: [],
  companies: [],
  detailProject: null,
  isDrowerOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS_SUCCESS':
      return { ...state, projects: action.payload };
    case 'FETCH_COMPANIES_SUCCESS':
      return { ...state, companies: action.payload };
    case 'OPEN_DROWER':
      return { ...state, isDrowerOpen: true };
    case 'CLOSE_DROWER':
      return { ...state, isDrowerOpen: false };
    case 'SHOW_DETAIL_PROJECT':
      return { ...state, detailProject: action.payload, isDrowerOpen: true };
    default:
      throw new Error('The action is not handled yet!');
  }
}

export default function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { i18n } = useTranslation();

  const filterCompanies = (projects) => {
    const companies = [];
    projects.forEach((prg) => {
      if (companies.indexOf(prg.company) === -1) {
        companies.push(prg.company);
      }
    });
    return companies;
  };

  useEffect(() => {
    const splited = i18n.language.split('-');
    const lang = splited.length > 1 ? splited[0] : i18n.language;
    fetch(`/${contextUrl}/ab-projects-${lang}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'FETCH_COMPANIES_SUCCESS',
          payload: filterCompanies(data),
        });
        dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: data });
      });
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        {/* DROWER FOR DETAIL PROJECT */}
        <React.Fragment key='right'>
          <Drawer
            anchor='right'
            open={state.isDrowerOpen}
            onClose={() => dispatch({ type: 'CLOSE_DROWER' })}
          >
            <div>
              <IconButton
                onClick={() => dispatch({ type: 'CLOSE_DROWER' })}
                className={classes.drowerCloseButton}
              >
                <CloseIcon />
              </IconButton>
              <ProjectDetail project={state.detailProject} />
            </div>
          </Drawer>
        </React.Fragment>

        {/* PAGE HEADER */}
        <PortfolioHeader contextUrl={contextUrl} />

        {/* PAGE BODY */}
        <div className={classes.bodyContainer}>
          <Description />
          {state.companies.map((company) => (
            <div key={company}>
              <Separator title={company} />
              <Grid
                container
                alignItems='center'
                justify='flex-start'
                spacing={3}
              >
                {state.projects
                  .filter((prg) => prg.company === company)
                  .map((prg, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <ProjectCard
                        project={prg}
                        onMoreAction={() =>
                          dispatch({
                            type: 'SHOW_DETAIL_PROJECT',
                            payload: prg,
                          })
                        }
                      />
                    </Grid>
                  ))}
              </Grid>
            </div>
          ))}
        </div>
      </ThemeProvider>
    </div>
  );
}
