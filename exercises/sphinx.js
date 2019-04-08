class Sphinx {
	constructor() {
		this.riddles = []
		this.heroesEaten = 0;
	}
	collectRiddle(riddle) {
		this.riddles.push(riddle);
		if (this.riddles.length > 3) {
			this.riddles.shift();
		}
	}
	attemptAnswer(answer) {
		this.riddles.forEach(function(elem) {			
			if (elem.answer === answer) {
				this.riddles.splice((this.riddles.indexOf(elem)), 1);
			}
		});
		return 'That wasn\'t that hard, I bet you don\'t get the next one';
		if ((this.riddles.includes(answer) === false)) {
			this.heroesEaten++;			
		}
	}
}

module.exports = Sphinx;