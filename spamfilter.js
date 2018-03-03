var texts = [
	{type: 'spam', message: 'Please buy this pills'}, 
    {type: 'spam', message: 'You are a son of African king! Congarats!'}
];

var getWords = function(text){
	return  text.split (" "); // TODO
};

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ');

var splits2 = 'Hello World. How are you doing?'.split(' ');


console.log(getWords(myString));