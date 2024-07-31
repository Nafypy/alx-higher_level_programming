#!/usr/bin/node
/* A script that prints the number of movies where the character "Wedge Antilles" is present */

const request = require('request');
const process = require('process');

if (process.argv.length !==3) {
	console.error('Usage: ./count_wedge_movies.js API_URL');
} else {
	const apiUrl = process.argv[2];
	const wedgeAntillesId = 'https://swapi-api.alx-tools.com/api/people/18';
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			console.error('error:', error);
			return;
		}
		try {
			const data = JSON.parse(body);
			let count = 0;
			data.results.forEach(film => {
				if (film.characters.includes(wedgeAntillesId)) {
					count++;

				}
			});
			console.log(count);
		} catch (e) {
			console.error('Error parsing JSON:', e);
		}
	});
}

