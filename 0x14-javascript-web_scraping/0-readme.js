#!/usr/bin/node
/*
 * A script that read and print a content of a file
 */

const fs = require('fs');
const process = require('process');
 
function readFile(filePath) {
/* Reads and print the content of a file in UTF_8 encoding
 */
fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		console.error('error:', err);
		return;
	}
	console.log(data);
});
}

if(process.argv.length !== 3) {
	console.error('Usage: ./read_file.js FILE PATH');
}else {
	const filePath = process.argv[2];
	readFile(filePath);
}
