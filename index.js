// Here I have a list of job applicants and their personal info along with programming skills. 
// I have made an array of objects (the applicants) with nested arrays of data about each person
var peopleCvs = [
  {
    firstName: "Zacharia",
    lastName: "Ambrosch",
    birthDate: "12/31/1997",
    children: 1,
    country: "Indonesia",
    knowsProgramming: true
  },
  {
    firstName: "Maegan",
    lastName: "Breitler",
    birthDate: "7/6/1998",
    children: 4,
    country: "South Africa",
    knowsProgramming: false
  },
  {
    firstName: "Sigismundo",
    lastName: "Wyss",
    birthDate: "8/11/1981",
    children: 5,
    country: "Thailand",
    knowsProgramming: true
  },
  {
    firstName: "Austen",
    lastName: "Sutherington",
    birthDate: "12/20/1999",
    children: 4,
    country: "Philippines",
    knowsProgramming: false
  },
  {
    firstName: "Jard",
    lastName: "Shovelton",
    birthDate: "11/30/1985",
    children: 1,
    country: "China",
    knowsProgramming: false
  }
]

// Check if the first person in the array is older than the last person in the array.
// Create variables for the first and last persons birth date.
const firstPersonBirthDate = new Date(peopleCvs[0].birthDate);
console.log(firstPersonBirthDate);
const lastPersonBirthDate = new Date(peopleCvs[4].birthDate);

// Calculate month difference from current date in time
const monthDiffFirstPers = Date.now() - firstPersonBirthDate.getTime();
const monthDiffLastPers = Date.now() - lastPersonBirthDate.getTime();

// Convert calculated difference in date format and extract year from date
const yearFirstPers = new Date(monthDiffFirstPers).getUTCFullYear();
const yearLastPers = new Date(monthDiffLastPers).getUTCFullYear();

// Calculate age 
const ageFirstPers = Math.abs(yearFirstPers - 1970);
const ageLastPers = Math.abs(yearLastPers - 1970);
console.log("First person age: " + ageFirstPers);
console.log("Last person age: " + ageLastPers); 

// If/else statement to check if first person is older than last.
if (ageFirstPers > ageLastPers) {
  console.log("First person is older than the last person.");
} else {
  console.log("First person is younger than the last person.");
}

console.log(`----- END OF LOOP -----`);


// Using an if/else statement with equal value and equal type operator to check if the 2nd person has the same amount of kids as the 3rd?
const secondPersonKids = peopleCvs[1].children;
const thirdPersonKids = peopleCvs[2].children;

if (secondPersonKids === thirdPersonKids) {
  console.log("Second and third persons have the same amount of kids");
} else {
  console.log("Second and third persons do not have the same amount of kids");
}

console.log(`----- END OF LOOP -----`);

// Using an if/else statement with and(&&) operator to check if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.
const firstPersonProgramming = peopleCvs[0].knowsProgramming;
const fourthPersonProgramming = peopleCvs[3].knowsProgramming;

if (firstPersonProgramming && fourthPersonProgramming) {
  console.log("Yay");
} else {
  console.log("LMGTFY");
}

console.log(`----- END OF LOOP -----`);

// Using a switch statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.
const secondPersonNationality = peopleCvs[1].country;

switch (secondPersonNationality) {
  case "Iceland":
    console.log("Hæ");
    break;
  case "Spain":
    console.log("Hola");
    break;
  case "Korea":
    console.log("여보세요");
    break;
  default:
    console.log("Hello");
}

console.log(`----- END OF LOOP -----`);

// Using a ternary operator to output if the 2nd person’s name is longer than 5 characters.
let secondPersonNameLength = peopleCvs[1].firstName.length;

const personNameLength = secondPersonNameLength > 5 
  ? "2nd person name is longer than 5 characters." 
  : "2nd person name is shorter than 5 characters.";

console.log(personNameLength);

console.log(`----- END OF LOOP -----`);