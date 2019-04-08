class Wizard {
	constructor(obj = {}) {
		this.name = obj.name;
		this.bearded = obj.bearded === undefined ? true : obj.bearded;
		this.isRested = true;
	}
	incantation(string) {
		return string.toUpperCase();
	};
	cast() {
		spells++;
		if (spells > 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST';
		} else {
		return 'MAGIC BULLET';
		};
	};
}

var spells = 0;

module.exports = Wizard;