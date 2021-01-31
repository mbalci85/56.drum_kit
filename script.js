// let drum1 = document.querySelector('.w');

// drum1.onclick = () => {
// 	new Audio('sounds/tom-w.mp3').play();
// };

let drums = document.querySelectorAll('.drum');

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

for (let i = 0; i < drums.length; i++) {
	drums[i].onkeypress = (e) => {
		// console.log(drums[i].innerHTML);
		console.log(e);
		let sound = 'sounds/tom-' + e.key + '.mp3';
		new Audio(sound).play();
		drums[i].className = 'pressed';
		setTimeout(() => {
			drums[i].className = e.key + ' drum';
		}, 1000);
		// console.log(drums[i].className);
	};
}
