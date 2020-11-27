import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import SituationsSearch from './SituationsSearch'
import SituationsKeywords from './SituationsKeywords'
import SituationsCategory from './SituationsCategory'
import { Accordion, AccordionDetails, AccordionSummary, Chip, IconButton, Paper, Tooltip, Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import clsx from 'clsx'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%'
  },
  facetInfoContainer: {
    padding: theme.spacing(1),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
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
  },
  accordionSummaryRoot: {
    paddingLeft: theme.spacing(1),
    cursor: 'default !important'
  },
  accordionSummaryContent: {    
    flexDirection: 'column'
  },
  chip: {
    margin: theme.spacing(0.5)
  }
})

class SituationFacetBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialActive: true,
      keywordsDisabled: true,
      categoriesDisabled: true
    }
  }

  componentDidUpdate = prevProps => {
    
    console.log(this.props.facetData)
    if (prevProps.facetData.query !== this.props.facetData.query ||
      prevProps.facetData.selectedSituation !== this.props.facetData.selectedSituation) {
      let initialActive = true
      if(this.props.facetData.query !== '' || this.props.facetData.selectedSituation !== null )
        initialActive = false
      console.log(this.props.facetData)
      console.log((this.props.facetData.categories.length === 0))
      this.setState({
        initialActive: initialActive,
        keywordsDisabled: initialActive,
        categoriesDisabled: (this.props.facetData.query === '' && this.props.facetData.categories.length === 0)
      })
    }
    
  } 
  handleInitialDelete = () => {    
    this.props.clearAllSituations()
  }


  getActiveInitialData = () => {
    const { classes } = this.props
    if(!this.state.initialActive) {
      let label = ''
      if (this.props.facetData.query !== '') {
        label = this.props.facetData.query
      }
      else if (this.props.facetData.selectedSituation !== null) {
        label = this.props.facetData.selectedSituation.name
      }
      return (
        <Tooltip key={'tooltip-key-initial'} title={'test'}>
        <Chip
        key='initial-chip'
        icon={null}
        label={label}
        className={classes.chip}
        onDelete={this.handleInitialDelete}
        color='primary'
      />          
        </Tooltip>
)  
    }
  }

  render () {
    const { classes } = this.props
    let initialActive = true
    if(this.props.facetData.query !== '' || this.props.facetData.selectedSituation !== null )
      initialActive = false
    const keywordsDisabled = initialActive
    const categoriesDisabled = (this.props.facetData.query === '' && this.props.facetData.categories.length === 0)

    return (
      <>
        <Accordion
          key='initial'
          expanded={initialActive}
        >
          <AccordionSummary
            classes={{
              root: classes.accordionSummaryRoot,
              content: classes.accordionSummaryContent
            }}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <div className={classes.headingContainer}>
              <Typography variant='body1'>Hakuehdot</Typography>
              <Tooltip
                title='facetDescription'
                enterDelay={300}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              {this.getActiveInitialData()}
            </div>

          </AccordionSummary>
          <AccordionDetails
            className={clsx(classes.accordionDetails)}
          >
            <div>
              <div className={classes.facetInfoContainer}>
                <SituationsSearch
                  query={this.props.facetData.query}
                  selectedSituation={this.props.facetData.selectedSituation}
                  situations={this.props.facetData.situations}
                  updateSituationQuery={this.props.updateSituationQuery}
                  updateSituationSelected={this.props.updateSituationSelected}
                  fetchSituationResults={this.props.fetchSituationResults}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          key='extra-categories'
          expanded={!categoriesDisabled}
          disabled={categoriesDisabled}
        >
          <AccordionSummary
            classes={{
              root: classes.accordionSummaryRoot,
              content: classes.accordionSummaryContent
            }}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <div className={classes.headingContainer}>
              <Typography variant='body1'>Suositellut kategoriat</Typography>
              <Tooltip
                title='facetDescription'
                enterDelay={300}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>

            </div>
          </AccordionSummary>
          <AccordionDetails
            className={clsx(classes.accordionDetails)}
          >
            <div>
              <div className={classes.facetInfoContainer}>
              <SituationsCategory
                  isFetching={this.props.facetData.isFetching}
                  fetchSituationResults={this.props.fetchSituationResults}
                  selectedSituation={this.props.facetData.selectedSituation}
                  categories={this.props.facetData.categories}
                  updateSituationSelected={this.props.updateSituationSelected}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          key='extra-keywords'
          expanded={!keywordsDisabled}
          disabled={keywordsDisabled}
        >
          <AccordionSummary
            classes={{
              root: classes.accordionSummaryRoot,
              content: classes.accordionSummaryContent
            }}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <div className={classes.headingContainer}>
              <Typography variant='body1'>Suositellut asiasanat</Typography>
              <Tooltip
                title='facetDescription'
                enterDelay={300}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>

            </div>
          </AccordionSummary>
          <AccordionDetails
            className={clsx(classes.accordionDetails)}
          >
            <div>
              <div className={classes.facetInfoContainer}>

                <SituationsKeywords
                  isFetching={this.props.facetData.isFetching}
                  fetchSituationResults={this.props.fetchSituationResults}
                  selectedKeywords={this.props.facetData.selectedKeywords}
                  keywords={this.props.facetData.keywords}
                  addSituationKeyword={this.props.addSituationKeyword}
                  removeSituationKeyword={this.props.removeSituationKeyword}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

      </>
    )
  }
}

export default withStyles(styles)(SituationFacetBar)
