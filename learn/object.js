var obj = {
	name: 'Ivan',
    age:  103,
    friends: [],
    sayHello: function() {
    	return 'Hello, my name is ' + this.name;
    }
};

console.log(obj);
console.log(obj.sayHello());