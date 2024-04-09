import chalk from "chalk";

let firstName = "David";
let lastName = "Tucker";
console.log(`W/O Chalk - Hello ${firstName} ${lastName}`);
console.log(`With Chalk - Hello ${chalk.red(firstName)} ${chalk.blue(lastName)}`);
