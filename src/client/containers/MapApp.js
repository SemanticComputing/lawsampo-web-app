import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Immutable from 'immutable';
import VirtualizedTable from '../components/VirtualizedTable';
import LeafletMap from '../components/map/LeafletMap';
import Pie from '../components/Pie';

import {
  getVisibleResults,
  getVisibleValues
} from '../selectors';

import {
  updateQuery,
  toggleDataset,
  fetchSuggestions,
  clearSuggestions,
  fetchResults,
  clearResults,
  openAnalysisView,
  closeAnalysisView,
  getGeoJSON,
  updateResultFormat,
  updateResultsFilter,
  sortResults,
} from '../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  mainContainer: {
    marginTop: 64,
    height: 'calc(100% - 64px)'
  },
  map: {
    height: '50%'
  }
});

let MapApp = (props) => {
  const { classes, error, analysisView } = props;
  console.log(props.results);

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Hipla.fi
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={analysisView ? 8 : 4}>
            <VirtualizedTable
              list={Immutable.List(props.results)}
              resultValues={props.resultValues}
              search={props.search}
              sortResults={props.sortResults}
              toggleDataset={props.toggleDataset}
              updateResultsFilter={props.updateResultsFilter}
              updateQuery={props.updateQuery}
              fetchResults={props.fetchResults}
              clearResults={props.clearResults}
              fetchSuggestions={props.fetchSuggestions}
              clearSuggestions={props.clearSuggestions}
              updateResultFormat={props.updateResultFormat}
              analysisView={props.analysisView}
            />
          </Grid>
          <Grid item xs={12} sm={analysisView ? 4 : 8}>
            <div className={classes.map}>
              <LeafletMap
                sliderValue={100}
                results={props.results}
                geoJSON={props.geoJSON}
                geoJSONKey={props.geoJSONKey}
                getGeoJSON={props.getGeoJSON}
              />
            </div>
            <div className={classes.map}>
              <Pie data={props.results} query={props.search.query} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    results: getVisibleResults(state.search),
    resultValues: getVisibleValues(state.search),
    analysisView: state.options.analysisView,
    error: state.error,
    geoJSON: state.map.geoJSON,
    geoJSONKey: state.map.geoJSONKey,
    resultFormat: state.options.resultFormat
  };
};

const mapDispatchToProps = ({
  openAnalysisView,
  closeAnalysisView,
  updateQuery,
  toggleDataset,
  fetchSuggestions,
  clearSuggestions,
  fetchResults,
  clearResults,
  sortResults,
  getGeoJSON,
  updateResultFormat,
  updateResultsFilter
});

MapApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  analysisView: PropTypes.bool.isRequired,
  openAnalysisView: PropTypes.func.isRequired,
  closeAnalysisView: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  toggleDataset: PropTypes.func.isRequired,
  fetchSuggestions: PropTypes.func.isRequired,
  clearSuggestions: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  geoJSON: PropTypes.object.isRequired,
  geoJSONKey: PropTypes.number,
  getGeoJSON: PropTypes.func.isRequired,
  updateResultFormat: PropTypes.func.isRequired,
  resultFormat: PropTypes.string.isRequired,
  results: PropTypes.array,
  resultValues: PropTypes.object,
  updateResultsFilter: PropTypes.func.isRequired
};

MapApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(MapApp));

export default MapApp;
