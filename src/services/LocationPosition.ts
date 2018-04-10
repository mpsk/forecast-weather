import Rest from './Rest';
import {REST} from '../SETTINGS';

export type LatLog = {
    lat: number;
    lon: number;   
}

export type LocationInfo = LatLog & {
    city: string;
    country: string;
}

export default class LocationPosition {
	
	private _rest: Rest;

	constructor() {
		this._rest = new Rest();
    }

	getServiceIpPosition(): Promise<LocationInfo> {
		return this._rest
            .get(REST.LOCATION_IP)
            .then((data) => {
                return data.status !== 'fail' ? data : this.getIpApiLocation()
            });
    }

    getIpApiLocation(): Promise<LocationInfo> {
        return this._rest
            .get('http://ip-api.com/json')
            .then((data) => (data as LocationInfo))
    }
    
    post() {
        return this._rest.post('/');
    }

}
        