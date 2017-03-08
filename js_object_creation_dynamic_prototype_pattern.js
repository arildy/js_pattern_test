//dynamic prototype pattern
//use this to benefit from prototype pattern and the ability to
//define in one line

var peopleDynamicProto = function(name, age, state){
	this.name = name;
	this.age = age;
	this.state = state;
	
	//this function would only be created once with this code
	if(typeof this.printPerson != "function"){
		peopleDynamicProto.prototype.printPerson = function(){
			console.log(this.name + ", " + this.age + ", " + this.state);
		}
	}
}

//now let's create objects
var person1 = new peopleDynamicProto();
person1.name = "john";
person1.age = 23;
person1.state = "CA";

var person2 = new peopleDynamicProto();
person2.name = "kim";
person2.age = 27;
person2.state = "SC";

person1.printPerson();
person2.printPerson();