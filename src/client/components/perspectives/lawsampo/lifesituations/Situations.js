
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../../main_layout/PerspectiveTabs'
import ResultTable from '../../../facet_results/ResultTable'


const Situations = props => {
    const { rootUrl, perspective } = props
    console.log(props)
    console.log(`${rootUrl}/${perspective.id}/iterative-search/cases`)
    return (
      <>
        <PerspectiveTabs
          routeProps={props.routeProps}
          tabs={props.perspective.tabs}
          screenSize={props.screenSize}
        />
        <Route
          exact path={`${rootUrl}/${perspective.id}/iterative-search`}
          render={() => <Redirect to={`${rootUrl}/${perspective.id}/iterative-search/statutes`} />}
        />
        <Route
          path={`${rootUrl}/${perspective.id}/iterative-search/statutes`}
          render={routeProps =>
            <ResultTable
              data={props.facetResults}
              facetUpdateID={props.facetData.facetUpdateID}
              resultClass='situations'
              facetClass='situations'
              fetchPaginatedResults={props.fetchPaginatedResults}
              updatePage={() => {}}
              updateRowsPerPage={props.updateRowsPerPage}
              sortResults={props.sortResults}
              routeProps={routeProps}
              rootUrl={rootUrl}
            />}
        />
        <Route
          path={`${rootUrl}/${perspective.id}/iterative-search/cases`}
          render={routeProps =>
            <ResultTable
              data={props.facetResults}
              facetUpdateID={props.facetData.facetUpdateID}
              resultClass='situations'
              facetClass='situations'
              fetchPaginatedResults={props.fetchPaginatedResults}
              updatePage={() => {}}
              updateRowsPerPage={props.updateRowsPerPage}
              sortResults={props.sortResults}
              routeProps={routeProps}
              rootUrl={rootUrl}
            />}
        />
      </>
    )
  }
export default Situations