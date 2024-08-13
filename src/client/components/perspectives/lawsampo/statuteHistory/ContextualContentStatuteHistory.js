import React, { useState } from 'react'

// import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import SectionOfALawListCollapsible from './SectionOfALawListCollapsible'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import StatuteHistoryDetails from './StatuteHistoryDetails'
import { parseSections } from './statuteHistoryUtils'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#bdbdbd'
  },
  mainContainer: props => ({
    margin: 0,
    maxWidth: 1600,
    marginTop: theme.spacing(0.5),
    flexWrap: 'wrap',
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      height: `calc(100% - ${theme.spacing(0.5)}`
    }
  }),
  gridItem: props => ({
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      height: '100%'
    },
    paddingTop: '0px !important',
    paddingBottom: '0px !important'
  }),
  textOuterContainer: props => ({
    height: 1000,
    overflow: 'auto',
    marginTop: 5,
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      height: '100%',
      marginTop: 'initial'
    }
  }),
  textInnerContainer: {
    padding: theme.spacing(2)
  },
  tableOfContents: props => ({
    padding: theme.spacing(2),
    overflow: 'auto',
    height: 200,
    top: theme.spacing(0.5),
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      height: '100%'
    }
  }),
  tooltip: {
    maxWidth: 500
  },
  tooltipContent: {
    padding: theme.spacing(1)
  },
  tooltipList: {
    listStylePosition: 'inside',
    paddingLeft: 0
  },
  statuteHistoryItem: {
    padding: theme.spacing(1)
  },
  metaDataContainer: {
    backgroundColor: '#dfdfdf',
    overflow: 'hidden',
    padding: theme.spacing(1)
  }
}))

const ContextualContentStatuteHistory = props => {
  const classes = useStyles(props)
  const { data, statuteVersions } = props
  const { tableOfContents, hasParts, hasChapters } = props
  const {
    sortBy, columnId, linkAsButton, showSource, sourceExternalLink
  } = props.tableOfContentsConfig || {}
  const [selectedSection, setSelectedSection] = useState(null)

  const sections = parseSections(data, statuteVersions)

  return (
    <div className={classes.root}>
      <Grid className={classes.mainContainer} container spacing={1}>
        <Grid className={classes.gridItem} item xs={12} sm={12} md={4}>
          {tableOfContents &&
            <Paper className={classes.tableOfContents}>
              <>
                <Typography variant='h6' component='h2'>Voimassa olevat pykälät</Typography>
                <SectionOfALawListCollapsible
                  data={tableOfContents}
                  hasParts={hasParts === 'true'}
                  hasChapters={hasChapters === 'true'}
                  sortBy={sortBy}
                  columnId={columnId}
                  expanded
                  linkAsButton={linkAsButton}
                  showSource={showSource}
                  sourceExternalLink={sourceExternalLink}
                  collapsible={false}
                  onlyHashLinks
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                />
              </>
            </Paper>}
        </Grid>
        <Grid className={classes.gridItem} item xs={12} sm={12} md={8}>
          <Paper className={classes.textOuterContainer}>
            {selectedSection
              ? <StatuteHistoryDetails
                  sectionInfo={selectedSection}
                  data={sections[selectedSection.key]}
                  layoutConfig={props.layoutConfig}
                  HTMLParserTask={props.HTMLParserTask}
                />
              : (
                <div className={classes.textInnerContainer}>
                  <Typography variant='h6' component='p'>Valitse näytettävä pykälä sisällysluettelosta.</Typography>
                </div>
                )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContextualContentStatuteHistory
