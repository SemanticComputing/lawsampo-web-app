import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import SituationsSearch from './SituationsSearch'
import SituationsKeywords from './SituationsKeywords'
import { Paper } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  facetInfoContainer: {
    padding: theme.spacing(1),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  accordionSummaryRoot: {
    paddingLeft: theme.spacing(1),
    cursor: 'default !important'
  },
  accordionSummaryContent: {
    margin: 0
  },
  accordionDetails: {
    paddingTop: 0,
    paddingLeft: theme.spacing(1),
    flexDirection: 'column'
  },
  two: {
    height: 60
  },
  three: {
    height: 108
  },
  four: {
    height: 135
  },
  five: {
    height: 150
  },
  six: {
    height: 180
  },
  ten: {
    height: 357
  }
})


class SituationFacetBar extends React.Component {
    
  render() {
    const { classes } = this.props
    return (
      <div>
      <div className={classes.facetInfoContainer}>
        <Paper className={classes.facetInfoContainer}>
        
          <SituationsSearch 
            query={this.props.facetData.query}
            selectedSituation={this.props.facetData.selectedSituation}
            situations={this.props.facetData.situations}
            updateSituationQuery={this.props.updateSituationQuery}
            updateSituationSelected={this.props.updateSituationSelected}
            fetchSituationResults={this.props.fetchSituationResults}
            />
        </Paper>
      </div>
      <div className={classes.facetInfoContainer}> 
        <Paper className={classes.facetInfoContainer}>
          <SituationsKeywords
            fetchSituationResults={this.props.fetchSituationResults}
            selectedKeywords={this.props.facetData.selectedKeywords}
            keywords={this.props.facetData.keywords}
            addSituationKeyword={this.props.addSituationKeyword}
            removeSituationKeyword={this.props.removeSituationKeyword}
          ></SituationsKeywords>

        </Paper>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SituationFacetBar)
