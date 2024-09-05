// Complete the js code
function Car(make, model) {
	
		this.make=make;
		this.model=model;
	}
	Car.Prototype.getMakeModel=function(){
		return `${this.make} ${this.model}`;
	}
}

function SportsCar(make, model, topSpeed) {
	
	CarCall(this,make,model){
		this.topSpeed=topSpeed;
	
	}
	SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
