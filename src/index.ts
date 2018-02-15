import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {OPEN_WEATHER} from './SETTINGS';
import Application from './Application';
import LocationPosition, {LocationInfo, LatLog} from './service/LocationPosition';
import WeatherApi from './service/WeatherApi';

import {initStores, AppStore, WeatherStore} from './stores';

getLocationData();

function getLocationData() {
    const position = new LocationPosition();
    const api = new WeatherApi();
    const stores = initStores();
    window['stores'] = stores;

    position.getServicePosition()
        .then((location) => {
            stores.app
                .setCity(location.city)
                .setCountry(location.country_name);

            ReactDOM.render(
                React.createElement(Application, {stores}),
                document.getElementById('app-view')
            );

            api.getLocCurrent(location.latitude, location.longitude)
                .then((weather) => {
                        stores.weather
                            .setWeatherInfo(weather.main)
                            .setWeatherWind(weather.wind)
                            .setWeatherDesc(weather.weather);
                })
        });

}