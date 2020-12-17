String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	if (this == "" || this.match(/\s/g)) {
		return true;
	}
	return false;
}
let x = "";
console.log(x.blank());

Array.prototype.last = function() {
	return this.slice(-1);
}

let array1=[1,2,3,4,5,6,7,8,9,10];
console.log(array1.last());



function Phrase(content) {
	this.content = content;

	this.processor = function (string) {
		return string.toLowerCase();
	}

	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}

	this.louder = function() {
		return this.content.toUpperCase();
	}
}





/*function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent ===	reverse(processedContent);
}

function emailParts (email) {
	let email1=email.toLowerCase();
	return email1.split("@");
}*/