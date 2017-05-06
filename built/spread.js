'use strict';

var sl = ['C', 'C++', 'Java'];
var dl = ['JS', 'PHP', 'Ruby'];

var l = [].concat(sl, ['C#'], dl, ['Python']);

console.log(l);

function add(x, y, z) {
	console.log(x + y + z);
}

var numbers = [1, 2, 3];
add.apply(undefined, numbers);