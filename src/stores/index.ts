import {useStrict} from 'mobx';
import AppStore from './AppStore';
import WeatherStore from './WeatherStore';

useStrict(true);

export {
	initStores,
	AppStore,
	WeatherStore
}

export interface Stores {
	app: AppStore;
	weather: WeatherStore;
}

function initStores(): Stores {
	return {
		app: new AppStore(),
		weather: new WeatherStore()
	}
}