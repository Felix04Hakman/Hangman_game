const passWord = 'NO PAIN, ON GAIN!'
let longWord = passWord.length
let secretWord = ''

for (i = 0; i < longWord; i++) {
	if (passWord.charAt(i) === ' ') {
		secretWord = secretWord + ' '
	} else {
		secretWord = secretWord + '-'
	}
}

function getPassword() {
	document.getElementById('plansza').innerHTML = secretWord

	let txt = document.getElementById('plansza')
	txt.style.display = 'flex'
	txt.style.alignItems = 'center'
	txt.style.justifyContent = 'center'
	txt.style.textTransform = 'uppercase'
}

window.onload = startWords

const words = new Array(35)
words[0] = 'A'
words[1] = 'Ą'
words[2] = 'B'
words[3] = 'C'
words[4] = 'Ć'
words[5] = 'D'
words[6] = 'E'
words[7] = 'Ę'
words[8] = 'F'
words[9] = 'G'
words[10] = 'H'
words[11] = 'I'
words[12] = 'Ą'
words[13] = 'K'
words[14] = 'L'
words[15] = 'Ł'
words[16] = 'M'
words[17] = 'N'
words[18] = 'Ń'
words[19] = 'O'
words[20] = 'Ó'
words[21] = 'P'
words[22] = 'Q'
words[23] = 'R'
words[24] = 'S'
words[25] = 'Ś'
words[26] = 'T'
words[27] = 'U'
words[28] = 'V'
words[29] = 'W'
words[30] = 'X'
words[31] = 'Y'
words[32] = 'Z'
words[33] = 'Ż'
words[34] = 'Ź'
words[34] = 'Ź'

// let letters = [
// 	'A',
// 	'Ą',
// 	'B',
// 	'C',
// 	'Ć',
// 	'D',
// 	'E',
// 	'Ę',
// 	'F',
// 	'G',
// 	'H',
// 	'I',
// 	'Ą',
// 	'K',
// 	'L',
// 	'Ł',
// 	'M',
// 	'N',
// 	'Ń',
// 	'O',
// 	'Ó',
// 	'P',
// 	'Q',
// 	'R',
// 	'S',
// 	'Ś', 
// 	'T',
// 	'U',
// 	'V',
// 	'W',
// 	'X',
// 	'Y',
// 	'Z',
// 	'Ż',
// 	'Ź',
// 	'Ź',
// ]
function startWords() {
	let contentDiv = ''
	for (let i = 0; i < 35; i++) {
		let element = 'lit' + i
		contentDiv += '<div class="litera"  onclick="checkIt(' + i + ')" id="' + element + '">' + words[i] + '</div>'
		if ((i + 1) % 7 == 0) contentDiv += '<div style="clear:both"></div>'
	}
	document.getElementById('alfabet').innerHTML = contentDiv

	getPassword()
}

String.prototype.SetSign = function(place,sign)
{
	 if(place > this.length - 1) return this.toString();
}

function checkIt(n) {
	for (let i = 0; i < longWord; i++) {
		if (passWord.charAt(i) == words[n]) {
			secretWord.charAt(i) = words[n];
		}
	}
}

