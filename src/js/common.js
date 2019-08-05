function convertSecondsToDisplay(timeInSeconds) {
	var numberOfSeconds = timeInSeconds,
		hours   = Math.floor(numberOfSeconds / 3600),
		minutes = Math.floor((numberOfSeconds - (hours * 3600)) / 60),
		seconds = numberOfSeconds - (hours * 3600) - (minutes * 60);

	if (minutes < 10) {minutes = '0' + minutes;}
	if (seconds < 10) {seconds = '0' + seconds;}

	return minutes + ':' + seconds;
}

var cardsToCreate = [
	{
		id: 1,
		value: '1',
		img: '01_img.png',
		sound: '01_sound.mp3'
	},
	{
		id: 2,
		value: '1',
		img: '01_txt.png',
		sound: '01_sound.mp3'
	},
	{
		id: 3,
		value: '2',
		img: '02_img.png',
		sound: '02_sound.mp3'
	},
	{
		id: 4,
		value: '2',
		img: '02_txt.png',
		sound: '02_sound.mp3'
	},
	{
		id: 5,
		value: '3',
		img: '03_img.png',
		sound: '03_sound.mp3'
	},
	{
		id: 6,
		value: '3',
		img: '03_txt.png',
		sound: '03_sound.mp3'
	},
	{
		id: 7,
		value: '4',
		img: '04_img.png',
		sound: '04_sound.mp3'
	},
	{
		id: 8,
		value: '4',
		img: '04_txt.png',
		sound: '04_sound.mp3'
	},
	{
		id: 9,
		value: '5',
		img: '05_img.png',
		sound: '05_sound.mp3'
	},
	{
		id: 10,
		value: '5',
		img: '05_txt.png',
		sound: '05_sound.mp3'
	},
	{
		id: 11,
		value: '6',
		img: '06_img.png',
		sound: '06_sound.mp3'
	},
	{
		id: 12,
		value: '6',
		img: '06_txt.png',
		sound: '06_sound.mp3'
	},
	{
		id: 13,
		value: '7',
		img: '07_img.png',
		sound: '07_sound.mp3'
	},
	{
		id: 14,
		value: '7',
		img: '07_txt.png',
		sound: '07_sound.mp3'
	},
	{
		id: 15,
		value: '8',
		img: '08_img.png',
		sound: '08_sound.mp3'
	},
	{
		id: 16,
		value: '8',
		img: '08_txt.png',
		sound: '08_sound.mp3'
	},
	{
		id: 17,
		value: '9',
		img: '09_img.png',
		sound: '09_sound.mp3'
	},
	{
		id: 18,
		value: '9',
		img: '09_txt.png',
		sound: '09_sound.mp3'
	},
	{
		id: 19,
		value: '10',
		img: '10_img.png',
		sound: '10_sound.mp3'
	},
	{
		id: 20,
		value: '10',
		img: '10_txt.png',
		sound: '10_sound.mp3'
	},
	{
		id: 21,
		value: '11',
		img: '11_img.png',
		sound: '11_sound.mp3'
	},
	{
		id: 22,
		value: '11',
		img: '11_txt.png',
		sound: '11_sound.mp3'
	},
	{
		id: 23,
		value: '12',
		img: '12_img.png',
		sound: '12_sound.mp3'
	},
	{
		id: 24,
		value: '12',
		img: '12_txt.png',
		sound: '12_sound.mp3'
	},
	{
		id: 25,
		value: '13',
		img: '13_img.png',
		sound: '13_sound.mp3'
	},
	{
		id: 26,
		value: '13',
		img: '13_txt.png',
		sound: '13_sound.mp3'
	},
	{
		id: 27,
		value: '14',
		img: '14_img.png',
		sound: '14_sound.mp3'
	},
	{
		id: 28,
		value: '14',
		img: '14_txt.png',
		sound: '14_sound.mp3'
	},
	{
		id: 29,
		value: '15',
		img: '15_img.png',
		sound: '15_sound.mp3'
	},
	{
		id: 30,
		value: '15',
		img: '15_txt.png',
		sound: '15_sound.mp3'
	}
];
