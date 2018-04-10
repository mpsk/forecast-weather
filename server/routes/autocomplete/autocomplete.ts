'use strict';
import {Router, Request} from 'express';
import * as fetch from 'node-fetch';

import { SERVICE } from '../../SETTINGS';

const routes = Router();

routes.post('/city', (req, resp, next) => onGetCity(req, resp));

export default routes;

// SERVICE.GEO_COMPLETE
// http://gd.geobytes.com/AutoCompleteCity?q=Kie

function onGetCity(req, resp) {
    const {city} = req.body;
	const URL = `${SERVICE.GEO_COMPLETE}/AutoCompleteCity?q=${city}`;
	fetch(URL, {
			method: 'GET',
			credentials: 'include'
		})
		.then(data => data.json())
        .then((data) => {
            resp.status(200).json(data);
        })
		.catch((error) => (onError(resp, error)));
}

function onError(resp, error) {
	console.log('ERROR', JSON.stringify(error));
	resp.sendStatus(400, error);
}
