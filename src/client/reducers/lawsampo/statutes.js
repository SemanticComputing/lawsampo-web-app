import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 10,
  sortBy: null,
  sortDirection: null,
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: false,
  instancePageHeaderExpanded: false,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
  properties: [
    {
      id: 'prefLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'statuteType',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 170
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
      id: 'identifier',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 160
    },
    {
      id: 'enforcementDate',
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: false,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'section',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'euDirective',
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false,
      minWidth: 160
    },
    {
      id: 'subjectCategory',
      onlyOnInstancePage: true,
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'situationCategory',
      onlyOnInstancePage: true,
      valueType: 'object',
      makeLink: true,
      externalLink: true,
      sortValues: false,
      numberedList: false
    },
    {
      id: 'tagCloud',
      onlyOnInstancePage: true,
      valueType: 'wordCloud'
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
  'statutes'
])

const statutes = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action)
  } else return state
}

export default statutes
