let inquirer = require("inquirer")
let { initQuestions, loopQuestionDog, loopQuestionLion} = require("./questions")
let choices
let { pet, Dog, Lion } = require("./cyberPet")
const starter = async () => {
  // inquirer.prompt().then()
  let answers = await inquirer.prompt(initQuestions)
  choices = answers
  console.log(choices)
  loopingQuestion() 
}

const loopingQuestion = async () => {
  // logic here to end the recursion
  console.log('123')
  console.log(choices.type)
  console.log(choices.petName)
  // switch (choices.type) {
  //   case Dog:
      pets = new Dog("choices.petName", "choices.type")
  //     console.log("selcted dog")
  //   break;
  
  //   case Lion:
  //     pets = new Lion("choices.petName", "choices.type")
  //   break;
  // }
  // switch (choices.type) {
  //   case Dog:
      let answersDog = await inquirer.prompt(loopQuestionDog)
  //     console.log(answersDog)
  //   break;
  
  //   case Lion:
  //     let answersLion = await inquirer.prompt(loopQuestionLion)
  //     console.log(answersLion)
  //   break;
  // }

  // switch (choices.type) {
  //   case Dog:
  //     if (answersDog.action == "Eat") {
        pets.eat()
  //     } else if (answersDog.action == "Play") {
  //       choices.petName.play()
  //     }
  //   break;
  
  //   case Lion:
  //     if (answersLion.action === "Eat") {
  //       choices.type.eat()
  //     } else if (answersLion.action === "Play") {
  //      choices.type.play()
  //     }
  //   break;
  // }

  loopingQuestion()
}

starter()