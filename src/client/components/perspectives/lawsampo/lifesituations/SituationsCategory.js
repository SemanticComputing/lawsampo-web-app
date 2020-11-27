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
import purple from '@material-ui/core/colors/purple'

import SortableTree, { changeNodeAtPath } from 'react-sortable-tree'
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer'
import Typography from '@material-ui/core/Typography'

import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'
import { Radio, RadioGroup } from '@material-ui/core'




const styles = (theme) => ({
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
  },
  chip: {
    margin: theme.spacing(0.5)
  }
})

/**
 * A component for text search in client-side faceted search architecture.
 */
class SituationsCategory extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          treeData: this.props.categories,
          selectedCategory: null
        }
    }

    componentDidUpdate = prevProps => {    
      if(prevProps.isFetching !== this.props.isFetching) {
      
        this.setState({
          treeData: this.props.categories
        })
      }  
    }

    handleChange = treeObj => event => {
      this.setState({selectedCategory: treeObj.node})
      this.props.updateSituationSelected({selectedSituation: treeObj.node})
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
          <Radio 
          onChange={this.handleChange(treeObj)}
          />
        }    
          value={treeObj.node.id}
          label={this.generateLabel(treeObj.node)}
        />
      )      
    }
  }
  
  handleDelete = () => {
    this.setState({selectedCategory: null})
    this.props.updateSituationSelected({selectedSituation: null})
    this.props.fetchSituationResults()    
  }

  render () {    
    
    const {selectedCategory} = this.state
    const {isFetching, classes} =  this.props
    const treeData = this.props.categories
    
    return (
      <>
      {isFetching ? (
        <div className={classes.spinnerContainer}>
          <CircularProgress style={{ color: purple[500] }} thickness={5} />
        </div>
      ) : (      
            <>
              <div className={''}>
                {this.props.selectedSituation !== null &&
                  (
                    <Tooltip key={this.props.selectedSituation.id} title={this.props.selectedSituation.id}>
                      <Chip
                        key={this.props.selectedSituation.id}
                        //icon={icon}
                        label={this.props.selectedSituation.name}
                        className={classes.chip}
                        onDelete={this.handleDelete}
                        color='primary'
                      />
                    </Tooltip>
                  )
                }
              </div>
              <FormControl>
               <RadioGroup value={selectedCategory === null ? null : selectedCategory.id}>
                <SortableTree
                  treeData={treeData}
                  onChange={treeData => this.setState({ treeData })}
                  canDrag={false}
                  rowHeight={30}
                  onlyExpandSearchedNodes
                  theme={FileExplorerTheme}
                  generateNodeProps={this.generateNodeProps}
                  isVirtualized={false}
                />
                </RadioGroup>
              </FormControl>
              </>

)}
</>
)}
}

export default withStyles(styles)(SituationsCategory)
