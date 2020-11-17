export const INITIAL_STATE = {
    facetedSearchHeaderExpanded: false,
    facetUpdateID: 0,
    fetchingResultCount: false,

    paginatedResults: [],
    properties: [
        {
            id: 'uri',
            valueType: 'string',
            makeLink: true,
            externalLink: true,
            sortValues: true,
            numberedList: false,
            onlyOnInstancePage: true
          },
          {
            id: 'lawLabel',
            valueType: 'string',
            makeLink: false,
            externalLink: false,
            sortValues: true,
            numberedList: false,
            minWidth: 180
          },    
          {
            id: 'sectionLabel',
            valueType: 'string',
            makeLink: false,
            externalLink: false,
            sortValues: true,
            numberedList: false,
            minWidth: 180
          },
          {
            id: 'text',
            valueType: 'string',
            makeLink: false,
            externalLink: false,
            sortValues: true,
            numberedList: false,
            minWidth: 180,
            collapsedMaxWords: 6
          }          

    ],
    isFetching: false,    
    statutesResults: [],
    
}


const situations = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_SITUATION_RESULTS':
            return {
                ...state,
                statutesResults: action.statutesResults,
                paginatedResults: action.statutesResults
            }
    

        default:
            return state
    }
}

export default situations