import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ResultTableCell from '../facet_results/ResultTableCell'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/InfoOutlined'

const styles = theme => ({
  instanceTable: {
    maxWidth: 1200,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      tableLayout: 'fixed',
      overflowWrap: 'break-word'
    },
    borderTop: '1px solid rgba(224, 224, 224, 1);'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  sahaButton: {
    margin: theme.spacing(2)
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelCell: {
    [theme.breakpoints.down('md')]: {
      paddingRight: 0
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 280
    }
  },
  tooltip: {
    marginTop: -3
  },
  expandCell: {
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: 32,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
})

/**
 * A component for generating a table based on data about an entity.
 */
class InstancePageTable extends React.Component {
  constructor (props) {
    super(props)
    const expandedRows = new Set()
    props.properties.forEach(prop => {
      if (prop.expandedOnInstancePage) {
        expandedRows.add(prop.id)
      }
    })
    this.state = { expandedRows }
  }

  componentDidMount = () => {
    if (this.props.fetchResultsWhenMounted) {
      this.props.fetchResults({
        perspectiveID: this.props.perspectiveConfig.id,
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass,
        uri: this.props.uri
      })
    }
  }

  handleExpandRow = rowId => () => {
    const expandedRows = this.state.expandedRows
    if (expandedRows.has(rowId)) {
      expandedRows.delete(rowId)
    } else {
      expandedRows.add(rowId)
    }
    this.setState({ expandedRows })
  }

  handleExpandRowFromChildComponent = rowId => {
    const expandedRows = this.state.expandedRows
    if (expandedRows.has(rowId)) {
      expandedRows.delete(rowId)
    } else {
      expandedRows.add(rowId)
    }
    this.setState({ expandedRows })
  }

  hasExpandableContent = ({ data, config }) => {
    let hasExpandableContent = false
    const isArray = Array.isArray(data)
    if (isArray) {
      hasExpandableContent = true
    }
    if (!isArray &&
        data &&
        data !== '-' &&
        config.valueType === 'string' &&
        config.collapsedMaxWords &&
        data.split(' ').length > config.collapsedMaxWords
    ) {
      hasExpandableContent = true
    }
    if (config.valueType === 'wordcloud') {
      hasExpandableContent = false
    }
    return hasExpandableContent
  }

  render = () => {
    const { classes, data, properties, screenSize, perspectiveConfig } = this.props
    const perspectiveID = perspectiveConfig.id
    return (
      <>
        {data &&
          <Table className={classes.instanceTable} size='small'>
            <TableBody>
              {properties.map(row => {
                const label = intl.get(`perspectives.${perspectiveID}.properties.${row.id}.label`)
                const description = intl.get(`perspectives.${perspectiveID}.properties.${row.id}.description`)
                const {
                  id, valueType, makeLink, externalLink, sortValues, sortBy, numberedList, minWidth,
                  linkAsButton, collapsedMaxWords, showSource, sourceExternalLink, renderAsHTML, HTMLParserTask
                } = row
                let { previewImageHeight } = row
                if (screenSize === 'xs' || screenSize === 'sm') {
                  previewImageHeight = 50
                }
                const expanded = this.state.expandedRows.has(row.id)
                return (
                  <TableRow key={row.id}>
                    <TableCell className={classes.labelCell}>
                      {label}
                      <Tooltip
                        className={classes.tooltip}
                        title={description}
                        enterDelay={300}
                      >
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className={classes.expandCell}>
                      {this.hasExpandableContent({ data: data[id], config: row }) &&
                        <IconButton
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                          })}
                          onClick={this.handleExpandRow(row.id)}
                          aria-expanded={expanded}
                          aria-label='Show more'
                        >
                          <ExpandMoreIcon />
                        </IconButton>}
                    </TableCell>
                    <ResultTableCell
                      key={id}
                      rowId={id}
                      columnId={id}
                      data={data[id]}
                      valueType={valueType}
                      makeLink={makeLink}
                      externalLink={externalLink}
                      sortValues={sortValues}
                      sortBy={sortBy}
                      numberedList={numberedList}
                      minWidth={minWidth}
                      previewImageHeight={previewImageHeight}
                      container='cell'
                      expanded={expanded}
                      onExpandClick={this.handleExpandRowFromChildComponent}
                      shortenLabel={false}
                      linkAsButton={linkAsButton}
                      collapsedMaxWords={collapsedMaxWords}
                      showSource={showSource}
                      sourceExternalLink={sourceExternalLink}
                      renderAsHTML={renderAsHTML}
                      HTMLParserTask={HTMLParserTask}
                      referencedTerm={data.referencedTerm}
                    />
                  </TableRow>
                )
              }
              )}
            </TableBody>
          </Table>}
      </>
    )
  }
}

InstancePageTable.propTypes = {
  classes: PropTypes.object.isRequired,
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  properties: PropTypes.array.isRequired
}

export const InstanceHomePageTableComponent = InstancePageTable

export default withStyles(styles)(InstancePageTable)
