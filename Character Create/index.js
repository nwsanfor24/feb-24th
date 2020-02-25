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
    this.isAlive = function(){
        if (this.hitPoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n----------------\n");
            return true;
        } else {
            console.log(this.name + " has died!");
            return false;
        }
    };

    this.attack = function(character2) {
        character2.hitPoints -= this.strength;
    };

    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
    };
}

var knight = new characterCreate("Axel", "Knight", "M", 26, 150, 300)
var necromancer = new characterCreate("Silas", "Necromancer", "F", 32, 60, 250)
var alien = new characterCreate("Clark", "Alien", "M", 33, 9000, 9000)

knight.PrintStats();
necromancer.PrintStats();

knight.attack(necromancer);
necromancer.PrintStats();
necromancer.isAlive();

knight.levelUp();
knight.PrintStats();

while (knight.isAlive() === true && necromancer.isAlive() === true) {

    knight.attack(necromancer);
    necromancer.attack(knight);

    knight.PrintStats();
    necromancer.PrintStats();
}

console.log(alien.name + " has approached the victor! You must fight to the death!");

knight.PrintStats();
alien.PrintStats();

knight.attack(alien);
alien.PrintStats();
alien.isAlive();

knight.levelUp();
knight.PrintStats();

while (knight.isAlive() === true && alien.isAlive() === true) {

    knight.attack(alien);
    alien.attack(knight);

    knight.PrintStats();
    alien.PrintStats();
}