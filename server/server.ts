'use strict';

import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as fs from 'fs';
import * as os from 'os';
const yargs = require('yargs');

import routes from './routes';

const flags = yargs.argv;
const PORT = flags.port || 4000;

const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));
app.use(routes);

server.listen(PORT, () => onStart(PORT));

function onStart(port) {
	const localIp = getServerIp();
    console.log(`Server has been started on "http://${getServerIp()}:${port}"`);
}

function getServerIp() {
    const ifaces = os.networkInterfaces();
    const values = Object.keys(ifaces).map((name) => ifaces[name]);
    const ipv4 = Array.prototype.concat(...values).filter(({internal, family}) => (internal === false && family === 'IPv4'))[0];
    return ipv4 ? ipv4.address : undefined;
}