let initQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "type",
      message: "What kind of pet do you want?",
      choices: ["Dog", "Lion"],
    },
    {
      type: "input",
      name: "petName",
      message: "What would you like to name your pet?",
    },
  ]
  
  let loopQuestionDog = [
    {
      type: "rawlist",
      name: "action",
      message: `What do you want to do with your pet?`,
      choices: ["Eat", "Sleep", "Ill", "Bark", "Play", "Idle"],
    },
  ]

  let loopQuestionLion = [
    {
      type: "rawlist",
      name: "action",
      message: `What do you want to do with your pet?`,
      choices: ["Eat", "Sleep", "Ill", "Roar", "Hunt", "Run"],
    },
  ]
  
  module.exports = {
    initQuestions,
    loopQuestionDog,
    loopQuestionLion
  }