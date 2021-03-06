
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import SituationsPerspectiveTabs from './SituationsPerspectiveTabs'
import SituationsResultTable from './SituationsResultTable'

const Situations = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <SituationsPerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
        updateResultType={props.updateResultType}
        fetchSituationResults={props.fetchSituationResults}
        facetData={props.facetData}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/iterative-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/iterative-search/statutes`} />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/iterative-search/statutes`}
        render={routeProps =>
          <SituationsResultTable
            perspective={perspective}
            isFetching={props.facetData.isFetching}
            fetchSituationResults={props.fetchSituationResults}
            data={props.facetResults}
            columns={props.facetResults.statutesProperties}
            results={props.facetResults.statutesResults}
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
          <SituationsResultTable
            perspective={perspective}
            isFetching={props.facetData.isFetching}
            data={props.facetResults}
            columns={props.facetResults.caseProperties}
            results={props.facetResults.casesResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='situations'
            facetClass='situations'
            fetchPaginatedResults={props.fetchPaginatedResults}
            fetchSituationResults={props.fetchSituationResults}
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
