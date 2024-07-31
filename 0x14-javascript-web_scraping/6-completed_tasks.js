#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id

const request = require('request');
const process = require('process');

if (process.argv.length !== 3) {
	console.error('Usage: ./compute_tasks.js API_URL');
} else {
	const apiUrl = process.argv[2];
	request.get(apiUrl, (error, response, body) => {
		if (error) {
			console.error('Error:', error);
			return;
		}

		try {
			const todos = JSON.parse(body);
			const userTasks = {};

			todos.forEach(todo => {
				if (todo.completed) {
					if (!userTasks[todo.userId]) {
						userTasks[todo.userId] = 0;
					}
					userTasks[todo.userId]++;
				}
			});
			
			for (const userId in userTasks) {
				console.log(`User ${userId}: ${userTasks[userId]} completed tasks`);
				}
		} catch (e) {
			console.error('Error parsing JSON:', e);
		}
	});
}


