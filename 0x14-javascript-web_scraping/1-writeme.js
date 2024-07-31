#!/usr/bin/node
/*
 * A script that write a file to a string
 */
const fs = require('fs');
const process = require('process');

function writeFile(filePath, content) {
	/* Write a string to a file in UTF_8 encoding*/
	fs.writeFile(filePath, content, 'utf8', (err) => {
		if(err) {
			console.error('error:', err);
			return;
		}
		console.log('File written successfully');
	});
}
if(process.argv.length !== 4) {
	console.error('Usage: ./write_file.js FILE_PATH STRING_TO_PATH');
}else {
	const filePath = process.argv[2];
	const content = process.argv[3];
	writeFile(filePath, content);
}

