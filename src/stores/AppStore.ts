import {observable, action} from 'mobx';

export default class AppStore {

	@observable city: string;
	@observable country: string;

	@action setCity(city: string) {
		this.city = city;
		return this;
	}

	@action setCountry(county: string) {
		this.country = county;
		return this;
	}
}