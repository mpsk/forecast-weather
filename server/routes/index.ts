'use strict';
import * as path from 'path';
import {Express, Router} from 'express';

import * as utils from '../utils';

const routes = Router();

routes.use(utils.router.allowCrossDomain);

routes.get('/', (req, resp, next) => onLoadIndex(resp, next));
routes.get('/test', (req, resp, next) => resp.send('Test page.'));

export default routes;

function onLoadIndex(resp, next) {
	const filePath = path.resolve(__dirname, '../index.html');
	resp.sendFile(filePath);
};