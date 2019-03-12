var arr = ['A','B','C','D','E'];
for( var k in arr ){
	console.log( arr[k] ); //logs con
}

var jsond = require('./config.json');
console.log(jsond.username);
console.log(jsond.password);
console.log('new entry');
