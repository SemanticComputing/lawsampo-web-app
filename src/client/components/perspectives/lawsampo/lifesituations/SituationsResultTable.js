import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import ResultTableCell from '../../../facet_results/ResultTableCell'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import purple from '@material-ui/core/colors/purple'
import querystring from 'querystring'
import ResultTableHead from '../../../facet_results/ResultTableHead'
import TablePagination from '@material-ui/core/TablePagination'
import has from 'lodash'

const styles = theme => ({
  tableContainer: {
    overflow: 'auto',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 126px)'
    },
    backgroundColor: theme.palette.background.paper,
    borderTop: '1px solid rgba(224, 224, 224, 1);'
  },
  paginationRoot: {
    display: 'flex',
    backgroundColor: '#fff',
    borderTop: '1px solid rgba(224, 224, 224, 1);'
  },
  paginationCaption: {
    minWidth: 110
  },
  paginationToolbar: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 100
    }
  },
  progressContainer: {
    width: '100%',
    height: 'calc(100% - 72px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expandCell: {
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
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
 * A component for showing facet results as paginated table.
 * Based on Material-UI's Table component.
 */
class SituationsResultTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandedRows: new Set()
    }
  }

  componentDidMount = () => {
    console.log('component did mount')
    const currentPathname = this.props.routeProps.location.pathname
    console.log(currentPathname)
    
  }

  componentDidUpdate = prevProps => {
    
    // handle the case when the TABLE tab was not originally active
    const prevPathname = prevProps.routeProps.location.pathname
    const currentPathname = this.props.routeProps.location.pathname


  }

  handleChangePage = (event, page) => {
    console.log('page change')
    const currentPathname = this.props.routeProps.location.pathname
    if(currentPathname.endsWith('statutes'))
      this.updateResultType({resultType:'statutes'})
    else
      this.updateResultType({resultType:'cases'})
    if (event != null && !this.props.data.fetching) {
      this.props.updatePage(this.props.resultClass, page)
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

  handleSortBy = sortBy => event => {
    if (event != null) {
      this.props.sortResults(this.props.resultClass, sortBy)
    }
  }

  rowRenderer = row => {
    const { classes } = this.props
    const expanded = this.state.expandedRows.has(row.id)
    let hasExpandableContent = false
    const dataCells = this.props.columns.map(column => {
      if (column.onlyOnInstancePage) { return null }
      const columnData = row[column.id] == null ? '-' : row[column.id]
      const isArray = Array.isArray(columnData)
      if (isArray) {
        hasExpandableContent = true
      }
      if (!isArray &&
        columnData !== '-' &&
        column.valueType === 'string' &&
        column.collapsedMaxWords &&
        columnData.split(' ').length > column.collapsedMaxWords
      ) {
        hasExpandableContent = true
      }
      return (
        <ResultTableCell
          key={column.id}
          columnId={column.id}
          data={columnData}
          valueType={column.valueType}
          makeLink={column.makeLink}
          externalLink={column.externalLink}
          sortValues={column.sortValues}
          sortBy={column.sortBy}
          numberedList={column.numberedList}
          minWidth={column.minWidth}
          previewImageHeight={column.previewImageHeight}
          container='cell'
          expanded={expanded}
          linkAsButton={has(column, 'linkAsButton')
            ? column.linkAsButton
            : null}
          collapsedMaxWords={has(column, 'collapsedMaxWords')
            ? column.collapsedMaxWords
            : null}
          renderAsHTML={has(column, 'renderAsHTML')
            ? column.renderAsHTML
            : null}
        />
      )
    })
    return (
      <TableRow key={row.id}>
        <TableCell className={classes.expandCell}>
          {hasExpandableContent &&
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
        {dataCells}
      </TableRow>
    )
  }

  render () {
    const { classes, isFetching} = this.props
    const { resultCount, paginatedResults, page, pagesize, sortBy, sortDirection } = this.props.data

    return (
      <>
        <div className={classes.tableContainer}>
          {isFetching
            ? (
              <div className={classes.progressContainer}>
                <CircularProgress style={{ color: purple[500] }} thickness={5} />
              </div>
            ) : (
              <Table size='small'>
                <ResultTableHead
                  resultClass={this.props.resultClass}
                  columns={this.props.columns}
                  onSortBy={this.handleSortBy}
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                  routeProps={this.props.routeProps}
                />
                <TableBody>
                  {paginatedResults.map(row => this.rowRenderer(row))}
                </TableBody>
              </Table>
            )}
        </div>
      </>
    )
  }
}


export default withStyles(styles)(SituationsResultTable)
