import * as qs from 'querystring';
import Rest from './Rest';
import { OPEN_WEATHER } from '../SETTINGS';

const url = (uri: string) => (`${OPEN_WEATHER.API_HOST}` + uri);

interface APIOptions {
	key?: string;
}

export type ForecastDataMain = {
	humidity: number;
	pressure: number;
	temp: number;
	temp_max: number;
	temp_min: number;
}

export type ForecastDataWind = {
	speed: number;
	deg: number;
}

export type ForecastDataDesc = {
	id: number;
	icon: string;
	main: string;
	description: string;
}

export type ForecastData = {
	coord: {
		lat: number;
		lon: number;
	};
	main: ForecastDataMain;
	wind: ForecastDataWind;
	weather: Array<ForecastDataDesc>;
}

const createOpts = (options) => Object.assign({
	APPID: OPEN_WEATHER.API_KEY,
	units: 'metric',
	// lang: 'ua'
}, options);

export default class WeatherApi {

	private _rest: Rest;

	constructor(options: APIOptions = {}) {
		this._rest = new Rest();
	}

	getLocCurrent(latitude: number, longitude: number): Promise<ForecastData> {
		const uri = url('/weather');
		const opts = createOpts({
			lat: latitude,
			lon: longitude
		});
		return this._rest
			.get(uri, opts)
			.then((resp: ForecastData) => (resp));
	}

	/**
	 * @param {string} loc "50.4333,30.5167"
	 */
	getLocForecast(latitude: number, longitude: number) {
		const uri = url('/forecast');
		const opts = createOpts({
			lat: latitude,
			lon: longitude
		});
		return this._rest
			.get(uri, opts)
			.then((resp: ForecastData) => (resp));
	}

	getCityCurrent(city: string, country: string) {
		const uri = url('/weather');
		const opts = createOpts({
			q: [city, country].join(',')
		});
		return this._rest
			.get(uri, opts)
			.then((resp: ForecastData) => (resp));
	}

	getCityForecast(city: string, country: string) {
		const uri = url('/forecast');
		const opts = createOpts({
			q: [city, country].join(',')
		});
		return this._rest
			.get(uri, opts)
			.then((resp: ForecastData) => (resp));
	}

};