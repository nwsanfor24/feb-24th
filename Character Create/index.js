function characterCreate(name, profession, gender, age, strength, hitPoints, PrintStats) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(strength);
    this.hitPoints = parseInt(hitPoints);
    this.PrintStats = function() {
        console.log(`
NAME: ${this.name},
PROFESSION: ${this.profession},
GENDER: ${this.gender},
AGE: ${this.age},
STRENGTH: ${this.strength},
HP: ${this.hitPoints}`
        );
    }
}

var char1 = new characterCreate("Axel", "Knight", "M", 26, 150, 300)
var char2 = new characterCreate("Silas", "Necromancer", "F", 32, 60, 250)
var char3 = new characterCreate("Clark", "Alien", "M", 33, 9000, 9000)

char1.PrintStats();
char2.PrintStats();
char3.PrintStats();