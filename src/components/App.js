import React from 'react'
import{ connect} from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as Actions from '../actions.js' neu su dung redux thong thuong phai import action vao
import fetchData from'../actions.js'// chỉ cần fetchData , vì khi sử dụng redux-thunk  mapDispatchToProps trả về 1 function

class Reduxapp extends React.Component{
	constructor(props){
		super()
		
	}

	

	render(){
		const {appData, fetch} = this.props
		let list = appData.data.map(function(p, i){
						return <div key={i}>
							<h4>name:{p.name} age:{p.age}</h4>
						</div>
					})

		return (
			<div>
				<div className="header">
					<h1>redux-thunk</h1>
				</div>
				<div className="btn-fetch">
				<button onClick={fetch}>Loading</button>
				</div>
				<div className="list-item">
					{list}
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return{
		appData: state.reducers
	}
}

function mapDispatchToProps (dispatch) {
  return {
    //actions: bindActionCreators(Actions, dispatch) cach su dung khong dung redux-thunk
    //actions la object
    fetch: function(){
    	dispatch(fetchData())
    } //fetch data là 1 function khi su dung redux-thunk
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxapp)