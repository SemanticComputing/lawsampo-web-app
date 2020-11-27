import { findIndex } from 'lodash'

export const updateSituationQuery = ({ query }) => (
  {
    type: 'UPDATE_SITUATION_QUERY',
    query
  }
)
export const updateSituationSelected = ({ selectedSituation }) => (
  {
    type: 'UPDATE_SITUATION_SELECTED',
    selectedSituation
  }
)

export const updateResultType = ({ resultType }) => (
  {
    type: 'UPDATE_RESULT_TYPE',
    resultType
  }
)

export const addSituationKeyword = ({ keyword }) => (
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

export const addSituationCategory = ({ value }) => (
  {
    type: 'ADD_SITUATION_CATEGORY',
    value
  }
)

export const removeSituationCategory = (value) => (
  {
    type: 'REMOVE_SITUATION_CATEGORY',
    value
  }
)

export const clearAllSituations = () => (
  {
    type: 'CLEAR_ALL'
  }
)

export const fetchSituationResults = () => (
  {
    type: 'FETCH_SITUATION_RESULTS',
    resultType: 'statutes'
  }
)

export const updateSituationResults = ({ suggestedKeywords, suggestedCategories, statutesResults }) => (
  {
    type: 'UPDATE_SITUATION_RESULTS',
    suggestedKeywords,
    suggestedCategories,
    statutesResults
  }
)

export const updateSituations = ({ situations }) => (
  {
    type: 'UPDATE_SITUATIONS',
    situations
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
      id: 0,
      name: 'asuminen kiinteistö'
    },
    {
      id: 1,
      name: 'ihmisoikeudet perusoikeudet'
    },
    {
      id: 2,
      name: 'julkishallinto valtionhallinto'
    },
    {
      id: 3,
      name: 'koulutus'
    },
    {
      id: 4,
      name: 'liikenne kuljetus'
    },
    {
      id: 5,
      name: 'omaisuus kaupankäynti kuluttajansuoja'
    },
    {
      id: 6,
      name: 'perheoikeus perintöoikeus'
    },
    {
      id: 7,
      name: 'rahoitus'
    },
    {
      id: 8,
      name: 'rikosasiat oikeudenkäynti'
    },
    {
      id: 9,
      name: 'verotus'
    },
    {
      id: 10,
      name: 'ympäristö'
    },
    {
      id: 11,
      name: 'yritykset yhteisöt työelämä'
    }
  ],
  keywords: [],
  selectedKeywords: [],
  categories: [],
  resultType: 'statutes'

}

const situationsFacets = (state = INITIAL_STATE, action) => {
  console.log(action)
  const k = state.selectedKeywords
  switch (action.type) {
    case 'UPDATE_RESULT_TYPE':
      return {
        ...state,
        resultType: action.resultType
      }
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
      if (Array.isArray(k)) {
        k.push(action.keyword)
      }

      return {
        ...state,
        selectedKeywords: k

      }
    case 'REMOVE_SITUATION_KEYWORD':
      if (Array.isArray(k)) {
        const index = findIndex(k, ['id', action.keyword.id])
        k.splice(index, 1)
      }
      return {
        ...state,
        selectedKeywords: k
      }
    case 'CLEAR_ALL':
      return {
        ...state,
        query: '',
        categories: [],
        keywords: [],
        selectedSituation: null,
        selectedKeywords: [],
        selectedCategories: []
      }
    case 'FETCH_SITUATION_RESULTS':
      return {
        ...state,
        isFetching: true,
        keywords: [],
        categories: []

      }
    case 'UPDATE_SITUATION_RESULTS':
      return {
        ...state,
        keywords: action.suggestedKeywords,
        categories: action.suggestedCategories,
        isFetching: false

      }

    default:
      return state
  }
}

export default situationsFacets
