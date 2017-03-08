//the advantage of using prototype is that the properties won't be assigned
//to the object created if not defined, thus making it more lightweight
//compared to other pattern, where the properties will be assigned
//regardless if you define them or not (which you may not need)

//the disadvantage, you cannot create an object in one line,
//you have to explicitly define the properties, to assign the properties
//to the object created
//this could create a confusion if you want to create a lot of objects

//empty object
var peopleProto = function(){
	
}

//added prototype - properties to it
//this could be the default, if no values are assigned during creation
//of object
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

//added prototype - method to it as well
peopleProto.prototype.printPerson = function(){
	console.log(this.name + ", " + this.age + ", " + this.city);
}

//now let's create objects
var person1 = new peopleProto();
person1.name = "john";
person1.age = 23;
person1.city = "CA";

var person2 = new peopleProto();
person2.name = "kim";
person2.age = 27;
person2.city = "SC";

person1.printPerson();
person2.printPerson();