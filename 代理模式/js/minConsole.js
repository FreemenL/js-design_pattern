var minConsole = {
	log:function(){
		//写法1
		//console.log(Array.prototype.join.call(arguments));
		//写法2
		console.log(...Array.from(arguments));
	}
}