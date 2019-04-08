class Dragon {
	constructor(name, rider, color) {
		this.name = name;
		this.rider = rider;
		this.color = color;
		this.hungry = true;
	}
	eat() {
		if (full >= 2) {
			this.hungry = false;
		} else {
			this.hungry = true
		}
		full++;
		return full;
	}	
};

var full = 0

module.exports = Dragon;




































