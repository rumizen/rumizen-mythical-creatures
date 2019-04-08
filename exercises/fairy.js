class Fairy {
	constructor(name, dust) {
		this.name = name;
		this.dust = dust || 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	}
	receiveBelief() {
		this.dust++;
	}
	believe() {
		this.dust = this.dust + 10;
	}
	makeDresses(dresses) {
		this.clothes.dresses = this.clothes.dresses.concat(dresses);
	}
	provoke() {
		this.disposition = 'Vengeful';
	}
	replaceInfant(infant) {
		if (this.disposition == 'Vengeful') {
		infant.disposition = 'Malicious';
		this.humanWards.push(infant);
		}
		if (this.humanWards.length >= 2) {
			this.disposition = 'Good natured';
		}
		return infant;
	}
}

module.exports = Fairy;