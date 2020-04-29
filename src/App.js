import React, { useReducer, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';

import ProjectCard from './components/ProjectCard';
import Separator from './components/Separator';
import ProjectDetail from './components/ProjectDetail';
import PortfolioHeader from './components/PortfolioHeader';

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
  },
}));

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
      throw new Error();
  }
}

export default function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

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
    fetch('/ab-projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'FETCH_COMPANIES_SUCCESS',
          payload: filterCompanies(data),
        });
        dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: data });
      });
  }, []);

  return (
    <div className={classes.root}>
      {/* DROWER FOR DETAIL PROJECT */}
      <React.Fragment key='right'>
        <Drawer
          anchor='right'
          open={state.isDrowerOpen}
          onClose={() => dispatch({ type: 'CLOSE_DROWER' })}
        >
          <ProjectDetail project={state.detailProject} />
        </Drawer>
      </React.Fragment>

      <PortfolioHeader />

      {/* PAGE BODY */}
      <div className={classes.bodyContainer}>
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
                        dispatch({ type: 'SHOW_DETAIL_PROJECT', payload: prg })
                      }
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
