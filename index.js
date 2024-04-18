#!/usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tThis is Kshahmeer10 sentence words counter\n\t");
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "please enter sentence for words count",
    },
]);
const words = answers.sentence.trim().split(" ");
//print your array of words to the concole
console.log(words);
//print count words
console.log(`Your sentence words count is ${words.length}`);
