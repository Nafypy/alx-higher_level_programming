#!/usr/bin/node
/* A script that gets a content of a webpage and store it in a file */

const request = require('request');
const fs = require('fs');
const process = require('process');

if (process.argv.length !== 4) {
	console.error('Usage: ./fetch_store.js URL FILE_PATH');
} else {
	const url = process.argv[2];
	const filePath = process.argv[3];
	
	request.get(url, (error, response, body) => {
		if (error) {
			console.error('Error:' error);
			return;
		}
		
		fs.writeFile(filePath, body, 'utf8', (err) => {
			if (err) {
				console.error('Error:' error);
			} else {
				console.log('File written successfully');
			}
		});
	});
}


