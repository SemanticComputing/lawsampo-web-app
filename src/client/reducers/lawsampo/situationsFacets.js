import { findIndex } from 'lodash'

export const updateSituationQuery = ({query}) => (
    {
            type: 'UPDATE_SITUATION_QUERY',
            query
        }
)
export const updateSituationSelected = ({selectedSituation}) => (
    {
            type: 'UPDATE_SITUATION_SELECTED',
            selectedSituation
        }
)

export const addSituationKeyword = ({keyword}) => (
    {
        type: 'ADD_SITUATION_KEYWORD',
        keyword
    }
)

export const removeSituationKeyword = (keyword) => (
    {
        type: 'REMOVE_SITUATION_KEYWORD',
        keyword
    }
)

export const clearAll = () => (
    {
        type: 'CLEAR_ALL'        
    }
)

export const fetchSituationResults = () => (
    {
        type: 'FETCH_SITUATION_RESULTS'        
    }
)

export const updateSituationResults = ({suggestedKeywords, statutesResults}) => (
    {
        type: 'UPDATE_SITUATION_RESULTS',
        suggestedKeywords,
        statutesResults
    }
)


export const INITIAL_STATE = {
    facetedSearchHeaderExpanded: false,
    facetUpdateID: 0,

    isFetching: false,    
    query: '',
    selectedSituation: null,
    situations: [
        {
          id:0,
          name: "Asunto- ja kiinteistö"
        },
        {
          id:1,
          name: "Ihmis- ja perusoikeudet"
        },
        {
          id:2,
          name: "Immateriaalioikeus"
        },        
        {
          id:3,
          name: "Irtain omaisuus"
        },
        {
          id:4,
          name: "Julkinen hallinto"
        },
        {
          id:5,
          name: "Kilpailuoikeus"
        },
        {
          id:6,
          name: "Kuluttajansuoja"
        },
        {
          id:7,
          name: "Lainat ja velat"
        }         
      ],
    keywords: [],
    selectedKeywords: [],
    
}


const situationsFacets = (state = INITIAL_STATE, action) => {

    console.log(action)
    
    switch(action.type) {
        case 'UPDATE_SITUATION_QUERY': 
            return {
                ...state,
                query: action.query
            }
        case 'UPDATE_SITUATION_SELECTED': 
            return {
                ...state,
                selectedSituation: action.selectedSituation                
            }
            
        case 'ADD_SITUATION_KEYWORD': 
            let k = state.selectedKeywords
            if(Array.isArray(k)) {                 
                k.push(action.keyword)                
            }

            return {
                ...state,
                selectedKeywords: k

            }
        case 'REMOVE_SITUATION_KEYWORD':
            let k2 = state.selectedKeywords
            if(Array.isArray(k2)) {
                let index = findIndex(k2, ['id', action.keyword.id])
                k2.splice(index, 1)   
            }
            return {
                ...state,
                selectedKeywords: k2
            }
        case 'CLEAR_ALL':
            return state
        case 'FETCH_SITUATION_RESULTS':
            return state
        case 'UPDATE_SITUATION_RESULTS':
            return {
                ...state,
                keywords: action.suggestedKeywords
            }
    
        default:
            return state
    }
    

}

export default situationsFacets