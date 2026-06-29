"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Your question here]
    -Variable name personalized to question (no answer1)
   - Correct answer:
   - How I'll validate and check the answer :

3. Use that structure for all four questions.

6. Math: How will I calculate the percentage? Add a point if correct. Divide total earned points by number of questions and multiply by 100.

7. Final feedback logic (if / else if / else): if low "keep Trying" if around middle or high "Almost There" if perfect "You Know Me Exactly!"

Logical operators I will use:
- && for when there is multiple parts that form the correct answer.
- || or ! for exact answers.
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0; 

// Question 1
let ageCheck = prompt('How old I am?');
if (ageCheck <= 17) {
	alert('I am atleast old enough to drive.');
} else if (ageCheck >= 19) {
	alert('Not that old.');
} else {
	alert('You are correct!');
	score += 1;
}
   /*-Variable name personalized to question (no answer1) ageCheck
   - Correct answer: 18
   - How I'll validate and check the answer : Deny anything below and above eighteen as being correct
   */

// Question 2
let myCarBrand = prompt('What Japanese car brand do I like?');
if (myCarBrand == 'Toyota' || myCarBrand == 'Lexus') {
	alert('You are correct!');
	score += 1;
} else {
		alert('Incorrect.');
}
   /*-Variable name personalized to question (no answer1) myCarBrand
   - Correct answer: Toyota or Lexus
   - How I'll validate and check the answer : using || to have either be accepted
   */
   
// Question 3 
let airFryerOwnership = prompt('Do I own an air fryer? (yes or no)');
let airFryOwn = airFryerOwnership.toLowerCase();
if (airFryOwn == 'yes'){
	alert('You are correct!');
	score += 1;
} else {
	alert('Owning an air fryer is wonderful.');
}
	
   /*-Variable name personalized to question (no answer1)airFryerOwnership into airFryOwn for lowercase answers
   - Correct answer: yes
   - How I'll validate and check the answer : if it matches with yes it passes. If not, it goes to else
   */
   
// Question 4
let favPet = prompt('What is my favorite pet?');
let lowerFavPet = favPet.toLowerCase();
if (lowerFavPet != 'cat'){
	alert('Wrong pet.');
} else {
	alert('You are correct!')
	score += 1;
}
   /*-Variable name personalized to question (no answer1)favPet and lowerFavPet
   - Correct answer:'cat'
   - How I'll validate and check the answer : anything but cat is wrong
   */
   
// Calculate percentage using math
alert('calculating score...');

// Final feedback using if / else if / else
if (score == 2 || score == 3){
	alert('Almost There');
} else if (score == 4){
	alert('Good Job');
	alert('You Know Me Exactly!');
} else {
	alert('Keep Trying');
}
// Final summary alert
let finScore = (score / 4) * 100;
alert(`Your score is ${finScore}%.`);