import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  facets: {
    jenaText: {
      id: 'jenaText',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null
    },
    statuteType: {
      id: 'statuteType',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
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
      uriFilter: null
    },
    // subjectCategory: {
    //   id: 'subjectCategory',
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
    //   searchField: true,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null
    // },
    // situationCategory: {
    //   id: 'situationCategory',
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
    //   searchField: true,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null
    // },
    euDirective: {
      id: 'euDirective',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    }
  }
}

const legislationFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'statutes') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default legislationFacets
