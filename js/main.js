const passWord = 'BEZ PRACY NIE MA KOŁACZY'
let longWord = passWord.length
let secretWord = ''
let howMuchMiss = 0
let yes = new Audio('./audio/yes.wav')
let no = new Audio('./audio/no.wav')

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

function startWords() {
	let contentDiv = ''
	for (let i = 0; i < 35; i++) {
		let element = `lit${i}`
		contentDiv += `<div class="litera"  onclick="checkIt(${i})" id="${element}">${words[i]}</div>`
		if ((i + 1) % 7 == 0) contentDiv += '<div style="clear:both"></div>'
	}
	document.getElementById('alfabet').innerHTML = contentDiv

	getPassword()
}

String.prototype.SetSign = function (place, sign) {
	if (place > this.length - 1) return this.toString()
	else return this.substring(0, place) + sign + this.substring(place + 1)
}

function checkIt(n) {
	let hit = false

	for (let i = 0; i < longWord; i++) {
		if (passWord.charAt(i) == words[n]) {
			secretWord = secretWord.SetSign(i, words[n])
			hit = true
		}
	}
	if (hit == true) {
		yes.play()
		let element = `lit${n}`
		document.getElementById(element).style.background = '#003300'
		document.getElementById(element).style.color = '#00C000'
		document.getElementById(element).style.border = '3px solid #00c000'
		document.getElementById(element).style.cursor = 'default'

		getPassword()
	} else {
		no.play()
		let element = `lit${n}`
		document.getElementById(element).style.background = '#330000'
		document.getElementById(element).style.color = '#C00000'
		document.getElementById(element).style.border = '#3px solid #c00000'
		document.getElementById(element).style.cursor = 'default'

		document.getElementById(element).setAttribute('onclick', ';')

		//Lost opportunities
		howMuchMiss++
		let imageSrc = `./img/s${howMuchMiss}.jpg`
		document.getElementById('szubienica').innerHTML = `<img src="${imageSrc}" alt=""/>`
	}
	//victory
	if (passWord === secretWord)
		document.getElementById(
			'alfabet'
		).innerHTML = `Tak jest! Podano prawidłowe hasło: ${passWord}<span class="reset" onclick="location.reload()">JESZCZE RAZ MOŻE SPRÓBUJESZ?</span>`

	//defeat
	if (howMuchMiss >= 9)
		document.getElementById('alfabet').innerHTML =
			'Przegrałeś! Próbuj dalej!<span class="badReset" onclick="location.reload()">JESZCZE RAZ?</span>'
}
