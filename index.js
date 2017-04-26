var express =require('express');
var app = express();
app.listen(process.env.PORT||3000, function(){
	console.log('server running with port 3000');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', function(req,res){
	res.render('Home');
});