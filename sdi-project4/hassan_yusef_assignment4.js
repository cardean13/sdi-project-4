alert("JavaScript works!");


var frame = {
	
	number: function (p) {
		var pPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
			return pPattern.test(p)
	},
	
	email: function (e) {
		var ePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return ePattern.test(e)
 	}	
	
};
console.log(frame.number(3304128538))
console.log(frame.email("cardean13@yahoo.com"))








