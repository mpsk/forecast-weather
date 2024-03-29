import {noop, assign, partial, isEmpty} from 'lodash';
import * as qs from 'querystring';

import * as Jsonp from 'browser-jsonp';

const HEADERS = {
	ACCEPT: {'Accept': 'application/json'},
	CONTENT_JSON: {'Content-Type': 'application/json'}
};

const queryParams = (params: Object) => (isEmpty(params) ? '' : ('?' + qs.stringify(params)));
const urlWithParams = (url, params) => (url + queryParams(params));

interface RequestOptions extends RequestInit {
    body?: RequestInit['body'] | any; // Object
	[key: string]: any;
}

export default class Rest {
    static get = get;
    static getp = getp;
    static post = post;
    get = get;
    getp = getp;
    post = post;
}

function get(uri, options: RequestOptions = {}) {
    const getOpts: RequestInit = assign({}, options, {
        method: 'GET',
        headers: assign({}, HEADERS.ACCEPT)
    });

    const url = urlWithParams(uri, options);

    return fetch(url, getOpts)
        .then(handleError)
        .then(resp => (resp.json()));
}

function getp(uri, options: RequestOptions = {}) {
    const getOpts: RequestInit = assign({}, options, {
        method: 'GET',
        headers: assign({}, HEADERS.ACCEPT)
    });

    const url = urlWithParams(uri, options);
    return getJsonp(uri);
}

function getJsonp(uri: string): Promise<any> {
	return new Promise((resolve, reject) => {
		Jsonp({
			url: uri,
			success: (data) => resolve(data),
			error: (err) => reject(err)
		});
	});
}

function post(uri, options: RequestOptions = {}) {
    const postOpts: RequestInit = assign({}, options, {
        method: 'POST',
        headers: assign({}, HEADERS.ACCEPT, HEADERS.CONTENT_JSON),
        body: options.body ? JSON.stringify(options.body) : ''
    });

    return fetch(uri, postOpts)
        .then(handleError)
        .then(resp => (resp.json()));
}

function handleError(resp) {
    return resp.ok ?
        resp :
        resp.text().then(text => {
            return Promise.reject(text)
        });
}

function isHttpsToHttp(uri): boolean {
    return !!location.protocol.match('https:') && !!uri.match('http:');
}