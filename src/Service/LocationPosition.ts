import Rest from './Rest';
import {LOCATION} from '../SETTINGS';

export type LatLog = {
    latitude: number;
    longitude: number;   
}

export type LocationInfo = LatLog & {
    city: string;
    country_code: string;
    country_name: string;
    ip: string;
    region_code: string;
    region_name: string;
    time_zone: string;
    zip_code: string;
}

export default class LocationPosition {
	
	private _rest: Rest;

	constructor() {
		this._rest = new Rest();
    }
    
    getNativePosition(): Promise<LatLog> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (data) => onSuccess(resolve, data),
                (error) => reject(error)
            );
        });

        function onSuccess(resolve, data: Position) {
            resolve({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            });
        }
    }

	getServicePosition(): Promise<LocationInfo> {
		return this._rest
			.get(LOCATION.HOST)
            .then((data: LocationInfo) => data);
	}

}
        