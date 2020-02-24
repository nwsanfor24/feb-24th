const dogs = {
    "raining": true,
    "noise": "Woof!",
    "makeNoise": () => {
        console.log(dogs.noise)
    }
}

const cats = {
    "raining": false,
    "noise": "Meow!",
    "makeNoise": () => {
        console.log(cats.noise)
    }
}

console.log(dogs.makeNoise());

console.log(cats.makeNoise());



