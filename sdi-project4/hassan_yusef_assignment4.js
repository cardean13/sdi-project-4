alert("JavaScript works!");


var frame = {
	
	number: function (p) {
		var pPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
			return pPattern.test(p)
	},
	
	
	email: function (e) {
		var ePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return ePattern.test(e)
 	},
 	
 	
 	internet: function (u) {
 		var iPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.+=&%@!\-\/]))?/;
 			return iPattern.test(u)
 	},
 	
	
	separate: function (a,b,c) {
		var sPattern = a.split(b)
			return sPattern.join (c)
	},
    
    
    stringNumber: function (s) {
    	return parseInt (s)
    },
 
 

	decimalNumber: function (d) {
		var num = 3.14159
			return num.toFixed(2)
	}
	
};
	
	
	

console.log(frame.number(3304128538))
console.log(frame.email("cardean13@fullsail.edu"))
console.log(frame.internet("http://www.androidguys.com/"))
console.log(frame.separate("xnnnynnnznnn", "nnn", "1"))
console.log(frame.stringNumber("123456789"))
console.log(frame.decimalNumber(3.14159))


