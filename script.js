// let drum1 = document.querySelector('.w');

// drum1.onclick = () => {
// 	new Audio('sounds/tom-w.mp3').play();
// };

let drums = document.querySelectorAll('button');

console.log(drums);

// for (let i = 0; i < drums.length; i++) {
// 	drums[i].onclick = () => {
// 		console.log(drums[i].innerHTML);
// 		let sound = 'sounds/tom-' + drums[i].innerHTML + '.mp3';
// 		new Audio(sound).play();
// 	};
// }

// for (let i = 0; i < drums.length; i++) {
// 	drums[i].onkeypress = (e) => {
// 		// console.log(drums[i].innerHTML);
// 		console.log(e.key);
// 		let sound = 'sounds/tom-' + e.key + '.mp3';
// 		new Audio(sound).play();
// 	};
// }

// for (let i = 0; i < drums.length; i++) {
// 	drums[i].onkeypress = (e) => {
// 		// console.log(drums[i].innerHTML);
// 		console.log(e);
// 		let sound = 'sounds/tom-' + e.key + '.mp3';
// 		new Audio(sound).play();
// 		drums[i].className = 'pressed';
// 		setTimeout(() => {
// 			drums[i].className = e.key + ' drum';
// 		}, 1000);
// 		// console.log(drums[i].className);
// 	};
// }

document.body.addEventListener('keypress', (e) => {
	if (e.keyCode == 119) {
		new Audio('sounds/tom-w.mp3').play();
		drums[0].className = 'pressed';
		setTimeout(() => {
			drums[0].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 97) {
		new Audio('sounds/tom-a.mp3').play();
		drums[1].className = 'pressed';
		setTimeout(() => {
			drums[1].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 115) {
		new Audio('sounds/tom-s.mp3').play();
		drums[2].className = 'pressed';
		setTimeout(() => {
			drums[2].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 100) {
		new Audio('sounds/tom-d.mp3').play();
		drums[3].className = 'pressed';
		setTimeout(() => {
			drums[3].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 106) {
		new Audio('sounds/tom-j.mp3').play();
		drums[4].className = 'pressed';
		setTimeout(() => {
			drums[4].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 107) {
		new Audio('sounds/tom-k.mp3').play();
		drums[5].className = 'pressed';
		setTimeout(() => {
			drums[5].className = e.key + ' drum';
		}, 1000);
	} else if (e.keyCode == 108) {
		new Audio('sounds/tom-l.mp3').play();
		drums[6].className = 'pressed';
		setTimeout(() => {
			drums[6].className = e.key + ' drum';
		}, 1000);
	}
});
