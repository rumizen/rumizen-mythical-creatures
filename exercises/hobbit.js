class Hobbit {
	constructor(name) {
		this.name = name;
		this.disposition = 'homebody';
		this.age = 0;
		this.adult = false;

	}
	celebrateBirthday() {
		this.age++;
		this.adult = this.age > 32;
	}
}

module.exports = Hobbit;