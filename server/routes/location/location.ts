'use strict';
import {Router, Request} from 'express';
import * as fetch from 'node-fetch';
import * as requestIp from 'request-ip';

const routes = Router();

routes.get('/ip', (req, resp, next) => onGetGeoIp(req, resp));

export default routes;

function onGetGeoIp(req, resp) {
	const clientIp = requestIp.getClientIp(req);

    fetch(
		`http://freegeoip.net/json/${clientIp}`, {
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
