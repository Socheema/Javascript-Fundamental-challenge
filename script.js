/* JAVASCRIPT FUNDAMENTALS PART 1
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

const teamDumebi = 96 + 108 + 89;
const teamCiroma = 88 + 91 + 110;
const teamDumebiAverage = teamDumebi / 2;
const teamCiromaAverage = teamCiroma / 2;
console.log(
  `TeamDuremiAverage is ${teamDumebiAverage} and teamCiromaAverage is ${teamCiromaAverage}`
);
if (teamCiromaAverage < teamDumebiAverage) {
  console.log("team Duremi wins the throphy");
} else if (teamCiromaAverage === teamDumebiAverage) {
  console.log("The game is a draw");
} else {
  console.log("Team ciroma wins the trophy");
}

// Bonus 1
const teamDumebiBonus1 = (97 + 112 + 101) / 2;
const teamCiromaBonus1 = (109 + 95 + 123) / 2;
const minimumScore = 100;
console.log(
  `Team dumebi Bonus1 is ${teamDumebiBonus1}, and team Ciroma bonus1 is ${teamCiromaBonus1} `
);
if ((teamDumebiBonus1) => minimumScore && teamDumebiBonus1 > teamCiromaBonus1) {
  console.log("team Ciroma wins");
} else if (
  (teamCiromaBonus1) => minimumScore && teamCiromaBonus1 > teamDumebiBonus1
) {
  console.log("team Ciroma wins");
} else {
  console.log("There is no winner");
}

// Bonus 2
const teamDumebiBonus2 = (97 + 112 + 101) / 2;
const teamCiromaBonus2 = (109 + 95 + 106) / 2;
const draw = 100;
if (teamDumebiBonus2 > teamCiromaBonus2 && teamDumebiBonus2 > draw) {
  console.log("Dumebi wins");
} else if (teamCiromaBonus2 > teamDumebiBonus2 && teamCiromaBonus2 > draw) {
  console.log("Ciroma wins");
} else if (
  (teamDumebiBonus2 === teamCiromaBonus2 && teamDumebiBonus2 >= draw) ||
  (teamCiromaBonus2 === teamDumebiBonus2 && teamCiromaBonus2 >= draw)
) {
  console.log("it is a draw");
} else {
  console.log("No one wins");
}

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

const score = Number(prompt("Enter Your Score"));
switch (true) {
  case score >= 81 && score <= 100:
    console.log(`Congratulation, you  score is ${score}, You made an A.`);
    break;
  case score >= 60 && score < 8:
    console.log(`Your score is  ${score}, You got a B.`);
    break;
  case score >= 50 && score < 60:
    console.log(`Your score is  ${score}, You got a D.`);
    break;
  case score >= 45 && score < 50:
    console.log(`Your score is  ${score}, You got a D.`);
    break;
  case score >= 25 && score < 45:
    console.log(`Your score is  ${score}, You got an E.`);
    break;
  case score >= 0 && score < 25:
    console.log(`Your score is  ${score}, You got an F.`);
    break;
  default:
    console.log("Enter a valid number");
}
