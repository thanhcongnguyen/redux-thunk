const people = [
  { name: 'Nguyen Thanh Cong', age: 36 },
  { name: 'Nguyen Thanh Phi', age: 24 },
  { name: 'Nguyen Thanh Hung', age: 44 }
]

export default () =>{
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			return resolve(people)
		},3000)
	})
}