#!/usr/bin/env node

/**
 * chuck-norris
 * Gets a joke and displays it
 *
 * @author Shahnawaz Alam <pass>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	console.log(flags);
	if (flags.type !== 'nerdy' || flags.type !== 'explicit') {
		flags.type = 'nerdy';
	}

	if (input.includes('joke')) {
		const res = await axios.get(`https://api.icndb.com/jokes/random?limitTo=[${flags.type}]`);
		console.log(res.data.value.joke);
	}
})();
