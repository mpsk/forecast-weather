'use strict';

import {observable, action, IObservableArray, runInAction, computed, toJS} from 'mobx';
import { debounce, identity } from 'lodash';
import Rest from '../services/Rest';

import {REST} from '../SETTINGS';

type City = {
	name: string;
	region: string;
	country: string;
};

export default class AppStore {

	@observable city: string;
	@observable country: string;
	@observable autocompleteCityList: IObservableArray<City> = observable([]);

	@action setCity(city: string, country: string = '') {
		this.city = city;
		this.country = country;
		return this;
	}

	@action searchCity = debounce((city: string) => {
		Rest.post(REST.SEARCH_CITY, {body: {city}})
			.then((data: Array<string>) => {
				const cities = data
					.filter(item => item !== '%s' && identity(item))
					.map(item => itemToCity(item));
				this.setCityList(cities);
			});
	}, 500)

	@action setCityList(data: Array<City>) {
		if (data) {
			this.autocompleteCityList.replace(data);
		} else {
			this.autocompleteCityList.clear();	
		}
	}

	@computed get cityList() {
		return toJS(this.autocompleteCityList);
	}
}

function itemToCity(item: string): City {
	const [name, region, country] = item.split(',').map(value => value.trim());
	return {name, region, country};
}