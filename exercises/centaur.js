class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
	}
	shoot() {
		fatigue++;
		if (fatigue >= 3) {
		this.cranky = true;
		return 'NO!';
		} else {
		return 'Twang!!!';
		}
		if (this.layingDown == true) {
			return 'NO!';
		}
	}
	run() {
		fatigue++;
		if (fatigue >= 3) {
		this.cranky = true;
		} else {
		return 'Clop clop clop clop!!!';
		}
		if (this.layingDown == true) {
			return 'NO!';
		}
	}
	sleep() {
		if (this.standing == true) {
			return 'NO!';
		} else {
			this.cranky = false;
			fatigue = 0;
			return 'ZZZZ';
		}

	}
	layDown() {
		this.standing = !this.standing;
		this.layingDown = !this.layingDown;
	}
	standUp() {
		this.standing = !this.standing;
		this.layingDown = !this.layingDown;
	}
	drinkPotion() {
		if ((this.standing === true) && (this.cranky === false)) {
			this.cranky = true;
		} else if (this.standing == true) {
			this.cranky = false;
		} else {
			return 'Not while I\'m laying down!';
		}
	}	
}

var fatigue = 0;

module.exports = Centaur;