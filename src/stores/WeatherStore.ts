import {observable, action} from 'mobx';

import {ForecastDataMain, ForecastDataWind, ForecastDataDesc} from '../services/WeatherApi';

export type ForecastDataMain = ForecastDataMain;
export type ForecastDataWind = ForecastDataWind;
export type ForecastDataDesc = ForecastDataDesc;

export default class WeatherStore {

	@observable updating: boolean;
	@observable info: ForecastDataMain;
	@observable wind: ForecastDataWind;
	@observable description: Array<ForecastDataDesc>;

	@action isUpdating(value: boolean) {
		this.updating = value;
		return this;
	}

	@action setWeatherInfo(info: ForecastDataMain) {
		this.info = info;
		return this;
	}

	@action setWeatherWind(wind: ForecastDataWind) {
		this.wind = wind;
		return this;
	}

	@action setWeatherDesc(description: Array<ForecastDataDesc>) {
		this.description = description;
		return this;
	}

}