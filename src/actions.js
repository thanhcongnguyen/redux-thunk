import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants.js'
import api from './api.js'

export function getData(){
	return{
		type: FETCHING_DATA
	}
}

export function getDataSuccess(data){
	console.log('success')
	return{
		type: FETCHING_DATA_SUCCESS,
		data
	}
}

export function getDataFailure(){
	console.log('faile')
	return{
		type: FETCHING_DATA_FAILURE
	}
}


export default function fetchData(){
	// console.log("bang dang truy cap vao function fetch data trong action.js")
	return function(dispatch){
			dispatch(getData())
			api()
			.then(function(data){
				dispatch(getDataSuccess(data))
			})
			.catch(function(){
				dispatch(getDataFailure())
			})
	}
}