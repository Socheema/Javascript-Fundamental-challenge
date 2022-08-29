/*JAVASCRIPT FUNDAMENTALS PART 1
ASSIGNMENT
TASK 1
There are two soccer teams, TeamDumebi andTeam Ciroma. They compete against eachother 3times. The winner with the highest average scorewins the a trophy!
1. Calculate the average score for each team, usingthe test data below. 2. Compare the team's average scores to determinethe winner of the competition, and print it totheconsole. Don't forget that there can be a draw, sotest for that as well (draw means they have thesameaverage score). 3. BONUS 1: Include a requirement for a minimumscore of 100. With this rule, a teamonly wins if it hasa higher score than the other team, and the sametime a score of at least 100 points. HINT: Usealogical
operator to test for minimumscore, as well as
multiple else-if blocks . 4. BONUS 2: Minimum score also applies toadraw!
So a draw only happens when both teams havethesame score and both have a score greater or equal
100 points. Otherwise, no teamwins the trophy. TEST DATA: Team Dumebi score 96, 108 and89. Team Ciroma score 88, 91 and 110. TEST DATA BONUS 1: TeamDumebi score 97, 112and101. Team Ciroma score 109, 95 and 123
TEST DATA BONUS 2:TeamDumebi score 97, 112and101. Team Ciroma score 109, 95 and 106
TASK 2
A school has following rules for grading system:
a. Below 25 - F
b. 26 to 45 - E
c. 46 to 50 - D
d. 51 to 60 - C
e. 61 to 80 - B
f. Above 81- A
Ask user to enter marks and print the correspondinggrade. */

// const teamDumebi = 96 + 108 + 89;
// const teamCiroma = 88 + 91 + 110;
// const teamDumebiAverage = teamDumebi / 2;
// const teamCiromaAverage = teamCiroma / 2;
// console.log(
//   `TeamDuremiAverage is ${teamDumebiAverage} and teamCiromaAverage is ${teamCiromaAverage}`
// );
// if (teamCiromaAverage < teamDumebiAverage) {
//   console.log("team Duremi wins the throphy");
// } else if (teamCiromaAverage === teamDumebiAverage) {
//   console.log("The game is a draw");
// } else {
//   console.log("Team ciroma wins the trophy");
// }

// Bonus 1
// const teamDumebiBonus1 = (97 + 112 + 101) / 2;
// const teamCiromaBonus1 = (109 + 95 + 123) / 2;
// const minimumScore = 100;
// console.log(
//   `Team dumebi Bonus1 is ${teamDumebiBonus1}, and team Ciroma bonus1 is ${teamCiromaBonus1} `
// );
// if (teamDumebiBonus1 => minimumScore && teamDumebiBonus1 > teamCiromaBonus1) {
//   console.log("team Ciroma wins");
// } else if (
//   teamCiromaBonus1 => minimumScore && teamCiromaBonus1 > teamDumebiBonus1
// ) {
//   console.log("team Ciroma wins");
// } else {
//   console.log("There is no winner");
// }

// Bonus 2
// const teamDumebiBonus2 = (97 + 112 + 101) / 2;
// const teamCiromaBonus2 = (109 + 95 + 106) / 2;
// const draw = 100;
// if (teamDumebiBonus2 > teamCiromaBonus2 && teamDumebiBonus2 > draw) {
//   console.log("Dumebi wins");
// } else if (teamCiromaBonus2 > teamDumebiBonus2 && teamCiromaBonus2 > draw) {
//   console.log("Ciroma wins");
// } else if (
//   (teamDumebiBonus2 === teamCiromaBonus2 && teamDumebiBonus2 >= draw) ||
//   (teamCiromaBonus2 === teamDumebiBonus2 && teamCiromaBonus2 >= draw)
// ) {
//   console.log("it is a draw");
// } else {
//   console.log("No one wins");
// }

// TASK 2
// const score = Number(prompt("Enter your score"));

// if (score >= 81 && score <= 100) {
//   console.log("You made an A!");
// } else if (score >= 60 && score < 81) {
//   console.log("You made a B.");
// } else if (score >= 50 && score < 60) {
//   console.log("You made a C.");
// } else if (score >= 45 && score < 50) {
//   console.log("You got a D.");
// } else if (score >= 25 && score < 45) {
//   console.log("You got an E.");
// } else if (score >= 0 && score < 25) {
//   console.log("You got an F.");
// } else {
//   console.log("Please,input a valid score");
// }

//SOLVING TASK 2 WITH SWITH CASE

// const score = Number(prompt("Enter Your Score"));
// switch (true) {
//   case score >= 81 && score <= 100:
//     console.log(`Congratulation, you  score is ${score}, You made an A.`);
//     break;
//   case score >= 60 && score < 8:
//     console.log(`Your score is  ${score}, You got a B.`);
//     break;
//   case score >= 50 && score < 60:
//     console.log(`Your score is  ${score}, You got a D.`);
//     break;
//   case score >= 45 && score < 50:
//     console.log(`Your score is  ${score}, You got a D.`);
//     break;
//   case score >= 25 && score < 45:
//     console.log(`Your score is  ${score}, You got an E.`);
//     break;
//   case score >= 0 && score < 25:
//     console.log(`Your score is  ${score}, You got an F.`);
//     break;
//   default:
//     console.log("Enter a valid number");
// }

// const a = 5;
// const b = 9;
// const sum = (a,b)=>{
//   return a + b;
// }
// console.log(sum(a,b))

// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
// console.log(clothing[0].length)

// function sum(...theArgs) {
//   let total = 0;
//   for(const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }
// console.log(sum(1,2,3))

// const sum = "theArgs";
// for(let i = 0; i < sum.length;  i++){
// }
// console.log(sum[5])

// const minuteConverter = sec => 60 * minute;
// const minute = 5;
// console.log(minuteConverter())

/*JAVASCRIPT ASSIGNMENT FUNADAMENTALS PART2TASK 1
Ciroma is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is
between 50 and 300, and if the value is different, the tip is 20%. 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first
tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100. 2. And now let's use arrays! So create an array 'bills' containing the test data below. 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before. 4. BONUS: Create an array 'total' containing the total
values, so the bill + tip.TEST DATA: 125, 555 and 44 HINT: Remember that an array needs a value in eachposition, and that value can actually be the returnedvalueof a function! So you can just call a function as array values(so don't store the tip values in separate variables first, but
right in the new array)
TASK 2
Write a Javascript program to check two numbers andreturn true if one of the numbers is 100 or if the sumof the two numbers is 100. CHECK;
console.log(isEqual(0,100)) // true
console.log(isEqual(100,0)) // true
console.log(isEqual(10,0)) // false
console.log(isEqual(0,10)) // false
console.log(isEqual(20,80)) // true
console.log(isEqual(50,50)) // true
TASK 3
Given two numbers, write a javascript programtofindoutwhich one is nearest to 100. CHECK;
console.log(closeTo100(99,1)) // 99
console.log(closeTo100(49,51)) // 51
console.log(closeTo100(50,50)) // 99 */

// const calcTips = (bill) =>

//   console.log(calcTips(bills)[0])

// const year = [2002, 2004, 2006];
// const calAge = birthYear => 2022 - birthYear;
// const ages = [calAge(year[0]),+calAge(year[1]), calAge(year[2])];
// console.log(ages)

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bill = 100;
console.log(calcTip(bill));

const bills = [125, 44, 555];
const billTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const billTips = [billTip(bills[0]), billTip(bills[1]), billTip(bills[2])];
console.log(billTips);

const total =
  bills[0] +
  billTip(bills[0]) +
  bills[1] +
  billTip(bills[1]) +
  bills[2] +
  billTip(bills[2]);
console.log(total);

//TASK 2

const checker = (a, b) =>
  a === 100 || b === 100 || a + b === 100 ? true : false;
console.log(checker(0, 100));
console.log(checker(100, 0));
console.log(checker(10, 0));
console.log(checker(0, 10));
console.log(checker(20, 80));
console.log(checker(50, 50));

//TASK 3

const nearestTo = (x, y) => (x > y ? x : y);
console.log(nearestTo(99, 1));
console.log(nearestTo(49, 51));
console.log(nearestTo(50, 50));

const sum = 3 + 5;
console.log(sum);
