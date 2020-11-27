export const INITIAL_STATE = {
  facetedSearchHeaderExpanded: false,
  facetUpdateID: 0,
  fetchingResultCount: false,

  paginatedResults: [],
  caseProperties: [

    {
      id: 'prefLabel',
      valueType: 'string',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 120
    },
    {
      id: 'uri',
      valueType: 'string',
      onlyOnInstancePage: true,
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false,
      minWidth: 230
    },
    {
      id: 'abstract',
      valueType: 'string',
      collapsedMaxWords: 6,
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 250
    },
    {
      id: 'court',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'decisionDate',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 160
    }

  ],
  statutesProperties: [
    {
      id: 'statute',
      valueType: 'string',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 230
    },
    {
      id: 'prefLabel',
      valueType: 'string',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 230
    },
    {
      id: 'uri',
      valueType: 'string',
      onlyOnInstancePage: true,
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false,
      minWidth: 230
    },
    {
      id: 'text',
      valueType: 'string',
      collapsedMaxWords: 6,
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 250
    },
    {
      id: 'enforcementDate',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 170
    }
  ],
  isFetching: false,
  statutesResults: []

}

const situations = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SITUATION_RESULTS':
      return {
        ...state,
        isFetching: true
      }
    case 'UPDATE_SITUATION_RESULTS':
      return {
        ...state,
        statutesResults: action.statutesResults,
        paginatedResults: action.statutesResults,
        isFetching: false
      }
    case 'CLEAR_ALL':
      return {
        ...state,
        paginatedResults: []

      }
    default:
      return state
  }
}

export default situations
