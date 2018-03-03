var texts = [
	{type: 'spam', message: 'Please buy this pills'}, 
    {type: 'spam', message: 'You are a son of African king! Congarats!'}
];

var getWords = function(text){
	return  text.split (" "); // TODO
};

var myString = 'Hello World. How are you doing?'.toLowerCase();
console.log(getWords(myString));

var toLower = function(array){
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
}

var stripInvalidChars = function(text){
    // use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
}

stripInvalidChars('Hello There!!!') //Hello There
