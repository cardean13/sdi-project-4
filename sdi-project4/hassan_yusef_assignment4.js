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
 	}
	
	
	
};
console.log(frame.number(3304128538))
console.log(frame.email("cardean13@fullsail.edu"))
console.log(frame.internet("http://www.androidguys.com/"))







