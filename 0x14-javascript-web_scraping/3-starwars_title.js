#!/usr/bin/node
/* A script that print the title of Star Wars movie based on the episode number*/

const request = require('request');
const process = require('process');

if (process.argv.length !== 3) {
	console.error('Usage: ./star.wars.movies.js EPISODE_NUMBER');
} else {
	const episodeNumber = process.argv[2];
	const url = ('https://swapi-api.alx-tools.com/api/films/:id');
	request.get(error, (url, response, body) => {
		if (error) {
			console.error('error:' error);
			return;
		}
		try {
			const data = JSON.parse(body);
			console.log(data.title);
		} catch (e) {
			console.error('Error parsing JSON:', e);
		}
	});
}


