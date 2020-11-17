import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import statutes from './lawsampo/statutes'
import caselaw from './lawsampo/caselaw'
import statutesFacets from './lawsampo/statutesFacets'
import statutesFacetsConstrainSelf from './lawsampo/statutesFacetsConstrainSelf'
import caselawFacets from './lawsampo/caselawFacets'
import caselawFacetsConstrainSelf from './lawsampo/caselawFacetsConstrainSelf'
import situations from './lawsampo/situations'
import situationsFacets from './lawsampo/situationsFacets'

const reducer = combineReducers({
  situations,
  situationsFacets,
  statutes,
  caselaw,
  statutesFacets,
  statutesFacetsConstrainSelf,
  caselawFacets,
  caselawFacetsConstrainSelf,
  leafletMap,
  animation,
  options,
  error,
  toastr: toastrReducer
})


export default reducer
