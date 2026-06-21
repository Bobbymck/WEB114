/* Bobby M 6/21/26-->
script for index.html with creative liberties*/

alert(`Welcome, this is the Bobby Mckinney space station.`);

const charName = prompt(`Before entering, please register your name.`, `Tim`);

const pet = prompt(`If you brought a pet, please sign them in. If none, please type "ball".`);

const role = prompt(`Enter your profession.`);

const trainYrs = prompt(`How many years of experience? Numbers only!`);

const numTrainsYrs = Number(trainYrs);

console.log(trainYrs, typeof trainYrs);

console.log(numTrainsYrs, typeof numTrainsYrs);

let powerLevel = (numTrainsYrs * 10); //words are not converted into numbers

const fights = confirm(`Does ${charName} like fighting? Click OK for Yes and Click Cancel for No`);

console.log(fights, typeof fights);

alert(`Hold for processing...`);

alert(`/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\
Name: ${charName} 
Pet: ${pet}
Role: ${role}
Power Level: ${powerLevel}
Fighter: ${fights ? "Yes" : "No"}

Arriving at the space station, ${charName} and their pet ${pet}
have been recruited onto the Bobby Mckinney space station.
Their role will be to be the acting ${role} onboard the station while the station recieves visitors.

/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\/_\\`);
