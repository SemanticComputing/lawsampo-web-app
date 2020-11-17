import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import intl from 'react-intl-universal'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import SortableTree, { changeNodeAtPath } from 'react-sortable-tree'
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer'
import Typography from '@material-ui/core/Typography'

import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'




const styles = () => ({
  facetSearchContainer: {
    width: '100%',
    height: 44,
    display: 'flex',
    alignItems: 'center'
  },
  facetSearchIconButton: {
    padding: 10
  },
  treeContainer: {
    flex: 1
  },
  treeContainerWithSearchField: {
    width: '100%',
    flex: 1
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    padding: 0,
    marginLeft: 6,
    marginRight: 4
  },
  searchMatch: {
    boxShadow: '0 2px 0 #673ab7'
  },
  facetLink: {
    textDecoration: 'inherit'
  }
})

/**
 * A component for text search in client-side faceted search architecture.
 */
class SituationsKeywords extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          treeData: []
        }
    }

    componentDidUpdate = prevProps => {      
      if (prevProps.keywords !== this.props.keywords) {
        this.setState({
          treeData: this.props.keywords
        })
      }      
    }


  handleClick = () => {
    //this.props.updateKeywords({facetClass: this.props.facetClass, keywords: ["test"]})
    //this.props.fetchSituationResults()
      //this.props.fetchResults({ query: this.state.value })
    
  };

  handleCheckboxChange = treeObj => event => {
    this.props.addSituationKeyword({keyword: treeObj.node})
    this.props.fetchSituationResults()
  }

  generateLabel = node => {
    return (
      <>
        <Typography variant='body2'>
          {node.name}          
        </Typography>
      </>
    )
  }

  generateNodeProps = treeObj => {
    const { node } = treeObj

    return {
      title: (
        <FormControlLabel
        control={
          <Checkbox
            className={''}
            checked={false}
            disabled={false}
            onChange={this.handleCheckboxChange(treeObj)}
            value={treeObj.node.id}
            color='primary'
          />
        }          
          label={this.generateLabel(treeObj.node)}
        />
      )      
    }
  }
  
  handleDelete = item => () => {
    this.props.removeSituationKeyword({facetClass: this.props.facetClass, keyword: item})
    this.props.fetchSituationResults()    
  }

  render () {    
    const selectedKeywords = this.props.selectedKeywords
    return (
      <>
              <div className={''}>
                {selectedKeywords !== null && selectedKeywords.map(item => {
                  const key = item
                  return (
                    <Tooltip key={key.id} title={key.id}>
                      <Chip
                        key={key.id}
                        //icon={icon}
                        label={key.name}
                        //className={classes.chip}
                       onDelete={this.handleDelete(item)}
                        color='primary'
                      />
                    </Tooltip>
                  )
                })}
              </div>
              <div className={''}>
                <SortableTree
                  treeData={this.state.treeData}
                  onChange={treeData => this.setState({ treeData })}
                  canDrag={false}
                  rowHeight={30}
                  onlyExpandSearchedNodes
                  theme={FileExplorerTheme}
                  generateNodeProps={this.generateNodeProps}
                  isVirtualized={false}
                />
              </div>
      </>

    )
      
  }
}

export default withStyles(styles)(SituationsKeywords)
