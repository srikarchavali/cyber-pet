// Classes & Objects

// OOP - Object Orientated Programming

// let favouriteFilm = "Avatar"
// let secondFilm = "Pirates of the Caribbean"

// console.log(favouriteFilm)

// favouriteFilm.length
// favouriteFilm.toUpperCase()

// let bensTaste = {
//     favouriteFilms: [
//         "Avatar",
//         "Pirates of the Caribbean",
//         "Gladiator",
//         "Spiderman: No way home"
//     ],
//     favActors: [
//         "Christoph Waltz",
//         "Adam Driver",
//         "Jonah Hill"
//     ]
// }

// let tracyTaste = {
//     favouriteFilms: [
//         "PS I love you",
//         "Silverling Playbooks",
//         "Home Alone"
//     ],
//     favActors: [
//         "Bradley Cooper"
//     ]

// }

// class Taste {
//   constructor(name, noFilmsWatched, favFilm) {
//     this.name = name
//     this.favFilm = favFilm
//     this.filmsWatched = noFilmsWatched
//   }

//   favActors = ["Bradley Cooper"]
//   isHuman = true
//   atCodeNation = true
// }

// let bensTaste = new Taste("Ben", 1000, "Gladiator")
// let tracyTaste = new Taste("Tracy", 600, "Silverlinings Playbook")
// let danielTaste = new Taste("Daniel", 20, "Spider Man")

// // tracyTaste.favFilms.push("Home Alone")

// console.log(bensTaste)
// console.log(tracyTaste)
// console.log(danielTaste)
class pet {
    constructor(name, type) {
        this.name = name
        this.type = type
      }
      mood = ["happy", "bored", "sick"]
      hunger = 0;
      thirst = 0;
      energy = 10;

      eat() {
          console.log(`${this.name}, the ${this.type} is eating`)
          console.log("energy:", this.energy++)
          console.log("thirst:", this.thirst--)
          console.log("hunger:", this.hunger--)
      }
      ill() {
          console.log(`${this.name}, the ${this.type} is ${this.mood[2]}`)
          console.log("energy:", this.energy--)
          console.log("hunger:", this.hunger--)
        }
        sleep() {
            console.log(`${this.name}, the ${this.type} is sleeping`)
            console.log("energy:", this.energy++)
        }
    
}
class Dog extends pet{
    constructor(hunger, thirst, energy) {
        super(hunger, thirst, energy);
    }
    bark(){
        console.log(`${this.name}, the ${this.type} wants to go for a walk`)
        console.log("energy:", this.energy--)
        console.log("thirst:", this.thirst++)
    }
    play() {
        console.log(`${this.name}, the ${this.type} is ${this.mood[0]} and having a great time playing! Woof!`)
        console.log("energy:", this.energy--)
        console.log("thirst:", this.thirst++)
        console.log("hunger:", this.hunger++)
      }
    idle(){
        console.log(`${this.name}, the ${this.type} is ${this.mood[1]}`);
        console.log(`energy: ${this.energy--}`);
    }
}

class Lion extends pet{
    constructor(hunger, thirst, energy) {
        super(hunger, thirst, energy);
    }
    roar(){
        console.log(`${this.name}, the ${this.type} is ready to hunt it's prey`)
        console.log("energy:", this.energy--);
        console.log("thirst:", this.thirst++);
    }
    hunt() {
        console.log(`${this.name}, the ${this.type} is feasting on its prey`)
        console.log("energy:", this.energy--)
        console.log("thirst:", this.thirst++)
        console.log("hunger:", this.hunger++)
      }
    run(){
        console.log(`${this.name}, the ${this.type} is ${this.mood[1]}`);
        console.log(`energy: ${this.energy--}`);
        console.log("thirst:", this.thirst++)
        console.log("hunger:", this.hunger++)
    }
}

let fido = new Dog("Fido", "Dog")
// fido.bark();
// fido.play();
// fido.sleep();
// fido.ill();
// fido.idle();

let simba = new Lion("Simba", "Lion")
// simba
// simba.roar();
// simba.sleep();
// simba.hunt();
// simba.run()

 module.exports = {
     Lion,
     Dog,
     pet
  }

