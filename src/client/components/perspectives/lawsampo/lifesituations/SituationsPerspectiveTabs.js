import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import intl from 'react-intl-universal'

const styles = () => ({
  root: {
    flexGrow: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
})

/**
 * A component for generating view tabs for a faceted search perspective or an entity landing page.
 */
class SituationsPerspectiveTabs extends React.Component {
  constructor (props) {
    super(props)
    const value = this.pathnameToValue(this.props.routeProps.location.pathname)
    this.state = { value }
  }

  componentDidMount = () => {
    const newPath = this.props.routeProps.location.pathname
    let page = 'statutes'
    if (newPath.endsWith('cases')) { page = 'cases' }
    this.props.updateResultType({ resultType: page })
  }

  componentDidUpdate = prevProps => {
    const newPath = this.props.routeProps.location.pathname
    const oldPath = prevProps.routeProps.location.pathname
    if (newPath !== oldPath) {
      let page = 'statutes'
      if (newPath.endsWith('cases')) { page = 'cases' }
      this.props.updateResultType({ resultType: page })

      if (this.props.facetData.query !== '' || this.props.facetData.selectedSituation != null) {
        this.props.fetchSituationResults()
      }
      this.setState({ value: this.pathnameToValue(newPath) })
    }
  }

  pathnameToValue = pathname => {
    const activeID = pathname.split('/').pop()
    let value = 0
    this.props.tabs.map(tab => {
      if (tab.id === activeID) {
        value = tab.value
      }
    })
    return value
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render () {
    const { classes, tabs } = this.props
    // const largeScreen = screenSize === 'xl'
    const variant = tabs.length > 3 ? 'scrollable' : 'fullWidth'
    const scrollButtons = tabs.length > 3 ? 'auto' : 'on'
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant={variant}
          scrollButtons={scrollButtons}
        >
          {tabs.map(tab =>
            <Tab
              key={tab.id}
              icon={tab.icon}
              label={intl.get(`tabs.${tab.id}`)}
              component={Link}
              to={tab.id}
              wrapped
            />
          )}
        </Tabs>
      </Paper>
    )
  }
}

export default withStyles(styles)(SituationsPerspectiveTabs)
