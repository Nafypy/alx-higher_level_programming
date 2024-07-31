#!/usr/bin/node
/* A script that displays a status code of a GET request*/

const request = require('request');
const process = require('process');

if (process.argv.length !== 3) {
	console.error('Usage: ./get_status_code.js URL');
} else {
	const url = process.argv[2];
	request.get(url, (error, response, body) => {
		if (error) {
			console.error('error:', error);
		} else {
			console.log(`code: ${response.statusCode}`);
		}
	});
}

