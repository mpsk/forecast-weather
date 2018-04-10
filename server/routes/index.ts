'use strict';
import * as path from 'path';
import {Express, Router} from 'express';
import * as utils from '../utils';
import * as requestIp from 'request-ip';

import location from './location/location';
import autocomplete from './autocomplete/autocomplete';

const routes = Router();

routes.use(utils.router.allowCrossDomain);
routes.post('/', (req, resp) => onConnected(req, resp));
routes.use('/location', location);
routes.use('/autocomplete', autocomplete);

routes.get('/', (req, resp, next) => onLoadIndex(resp, next));
routes.get('/test', (req, resp, next) => resp.send('Test page.'));

export default routes;

function onLoadIndex(resp, next) {
	const filePath = path.resolve(__dirname, '../index.html');
	resp.sendFile(filePath);
};

function onConnected(req, resp) {
	const clientIp = requestIp.getClientIp(req);
	resp.status(200).json({clientIp});
}