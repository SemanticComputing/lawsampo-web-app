import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  mergeMap,
  map,
  withLatestFrom,
  catchError
} from 'rxjs/operators'
import {
  FETCH_FACET_FAILED
} from '../actions'
import {
  backendErrorText
} from '../configs/lawsampo/GeneralConfig'

import { updateSituationResults } from '../reducers/lawsampo/situationsFacets'
const apiUrl = process.env.API_URL

export const fetchSituations = (action$, state$) => action$.pipe(
  ofType('FETCH_SITUATION_RESULTS'),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    console.log('fetchSituations - EPIC')
    console.log(state)
    const { query, selectedKeywords, selectedSituation, resultType } = state.situationsFacets
    const { facetClass, facetID } = action
    // const facets = state[`${facetClass}Facets`].facets
    // const facet = facets[facetID]
    // const { sortBy, sortDirection = false } = facet
    let body = {
      resultType: resultType,
      query: query,
      selected_keywords: selectedKeywords.map((e) => e.id)
    }
    if (selectedSituation != null) {
      body = {
        resultType: resultType,
        query: query,
        selected_keywords: selectedKeywords.map((e) => e.id),
        category: selectedSituation.id
      }
    }

    const requestUrl = `${apiUrl}/classifier`
    return ajax({
      url: requestUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).pipe(
      map(ajaxResponse => {
        const { results, suggested_keywords, suggested_categories } = ajaxResponse.response        
        return updateSituationResults({
          resultClass: 'situations',
          suggestedKeywords: suggested_keywords,
          suggestedCategories: suggested_categories,
          statutesResults: results
        })
      }),
      catchError(error => of({
        type: FETCH_FACET_FAILED,
        facetClass,
        facetID,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    )
  })
)
