let sl = ['C', 'C++', 'Java'];
let dl = ['JS', 'PHP', 'Ruby'];

let l = [...sl,'C#', ...dl,'Python'];

console.log(l);

function add(x, y ,z) {
	console.log(x + y + z);
}

let numbers = [1, 2, 3];
add(...numbers);