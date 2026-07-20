//Bobby McKinney 7/19/26
const buttons = document.querySelector('#allButtons');
const message = document.querySelector('#message');
const moodTitle = document.querySelector('#moodTitle')
const moods = {

    happy:  {

              name:"Happy",

              bg: '#FFD700',

              text: '#bd26b0',

              message: 'Warm smiles and the suns kisses!'

            },
    calm:  {

              name:"Calm",

              bg: '#2bedb9',

              text: '#ed2b5f',

              message: 'Tranquility'

            },
    angry:  {// do not stare for too long

              name:"Angry",

              bg: '#e63939',

              text: '#39e6e6',

              message: 'Frustration'

            },
    sleepy:  {

              name:"Sleepy",

              bg: '#5533b5',

              text: '	#33b555',

              message: 'Tiredness'

            }
}
function changeMood(happy) {

    const mood = moods[happy];
	document.body.style.background = mood.bg;
	document.body.style.color = mood.text;
	message.textContent = mood.message;
	moodTitle.textContent = mood.name;
}
function changeMood(calm) {

    const mood = moods[calm];
	document.body.style.background = mood.bg;
	document.body.style.color = mood.text;
	message.textContent = mood.message;
	moodTitle.textContent = mood.name;
}
function changeMood(angry) {

    const mood = moods[angry];
	document.body.style.background = mood.bg;
	document.body.style.color = mood.text;
	message.textContent = mood.message;
	moodTitle.textContent = mood.name;
}
function changeMood(sleepy) {

    const mood = moods[sleepy];
	document.body.style.background = mood.bg;
	document.body.style.color = mood.text;
	message.textContent = mood.message;
	moodTitle.textContent = mood.name;
}
function handleHappyClick() {

  changeMood("happy");

};
HappyButton.addEventListener('click', handleHappyClick);
function handleCalmClick() {

  changeMood("calm");

};
CalmButton.addEventListener('click', handleCalmClick);
function handleAngryClick() {

  changeMood("angry");

};
AngryButton.addEventListener('click', handleAngryClick);
function handleSleepyClick() {

  changeMood("sleepy");

};
SleepyButton.addEventListener('click', handleSleepyClick);


