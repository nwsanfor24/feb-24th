function digitalPal(hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function() {
        if (hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.")
        }
    }

    this.sleep = function() {
        if (sleepy === true) {
            console.log("Zzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No way! I'm not tired!");
        }
    }

    this.play = function() {
        if (bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    }

    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy Birthday to me! I am "+ this.age +" old!");
    }
}

// Creating a DOG

const dog = new digitalPal();

dog.
    outside = false;
    bark = function() {
        console.log("Woof! Woof!");
    }
    goOutside = function() {
        if (this.outside === false) {
            console.log("Yay! I love the outdoors");
            this.outside = true;
            this.barks();
        } else {
            console.log("We're already outside though...");
        }
    }
    goInside = function() {
        if (this.outside === true) {
            console.log("Do we have to? Fine...");
            this.outside = false;
        } else {
            console.log("I'm already inside...");
        }
    }

// Creating a CAT

const cat = new digitalPal();

cat.
    houseCondition = 100;
    meow = function() {
        console.log("Meow! Meow!");
    }
    destroyFurniture = function() {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
        if (this.houseCondition === 0) {
            console.log("It's finally over");
            return;
        }
    }
    buyNewFurniture = function() {
        this.houseCondition += 50;
        console.log("Are you sure about that?");
    }

dog.sleep();
dog.play();
dog.feed();