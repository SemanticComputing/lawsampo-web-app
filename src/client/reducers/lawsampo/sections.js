import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 20,
  sortBy: 'statute',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: true,
  instancePageHeaderExpanded: true,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
  properties: [
    {
      id: 'statute',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'prefLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'uri',
      valueType: 'object',
      onlyOnInstancePage: true,
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'text',
      valueType: 'string',
      collapsedMaxWords: 6,
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 300
    },
    {
      id: 'statuteEnforcementDate',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'sectionEnforcementDate',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'subjectCategory',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'situationCategory',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'contentHTMLAnnotated',
      valueType: 'string',
      onlyOnInstancePage: true,
      renderAsHTML: true,
      HTMLParserTask: 'addAnnotationTooltips',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false
    }
  ]
}

const resultClasses = new Set([
  'sections'
])

const sections = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default sections
