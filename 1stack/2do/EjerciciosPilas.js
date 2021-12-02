/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */
 // Creado por Brandon Josué Floriano Rolón


function Stack() {
	this.dataStore = [];

	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}
function peek() {
	return this.dataStore[this.top-1];
}
function pop() {
	return this.dataStore[--this.top];
}
function clear() {
	this.top = 0;
}
function length() {
	return this.top;
}

var s = new Stack();

s.push("Brandon");
s.push("Karen");
s.push("Josue");
console.log("length: "+s.length());
console.log(s.peek());

var popped = s.pop();

console.log("El elemento que se removio fue: " + popped);
console.log(s.peek());
s.push("Josiel");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Alejandro");
console.log(s.peek());
