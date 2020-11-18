import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  facets: {
    // documentType: {
    //   id: 'documentType',
    //   label: 'Document type',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: 'instanceCount',
    //   sortDirection: 'desc',
    //   sortButton: true,
    //   spatialFilterButton: false,
    //   pieChartButton: true,
    //   isFetching: false,
    //   searchField: false,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null
    // },
    enforcementDate: {
      id: 'enforcementDate',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    }
    // euDirective: {
    //   id: 'euDirective',
    //   label: 'EU directive',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: 'instanceCount',
    //   sortDirection: 'desc',
    //   sortButton: true,
    //   spatialFilterButton: false,
    //   pieChartButton: false,
    //   isFetching: false,
    //   searchField: false,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null
    // }
  }
}

const legislationFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'legislation') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default legislationFacets
