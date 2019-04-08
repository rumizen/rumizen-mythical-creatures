class Pirate {
	constructor(name, job) {
		this.name = name;
		this.job = job || 'Scallywag';
		this.cursed = false;
		this.booty = 0;
	}
	commitHeinousAct() {
		acts++;
		if (acts > 2) {
			this.cursed = true;
		}
	}
	robShip() {
		this.booty = 100;
		return 'YAARRR!';
	}
}

var acts = 0;

module.exports = Pirate;




































