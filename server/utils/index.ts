import {Response, Request} from 'express';

const router = {
	allowCrossDomain
};

export {
    router
}

function allowCrossDomain (req: Request, res: Response, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
};