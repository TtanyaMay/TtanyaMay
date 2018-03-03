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

