import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants.js'

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}


export default function dataReducer (state = initialState, action){
	switch(action.type){
		case FETCHING_DATA:
			return{
				...state,
				isFetching: true
			}
		case FETCHING_DATA_SUCCESS:
			return{
				...state,
				data: action.data,
				dataFetched: true
			}
		case FETCHING_DATA_FAILURE:
			return{
				...state,
				error: true
			}
		default:
			return state
	}
}