import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {reaction} from 'mobx';

import {OPEN_WEATHER} from './SETTINGS';
import Application from './Application';
import LocationPosition from './services/LocationPosition';
import WeatherApi from './services/WeatherApi';

import {initStores, AppStore, WeatherStore} from './stores';

getLocationData();

function getLocationData() {
    const position = new LocationPosition();
    const api = new WeatherApi();
    const stores = initStores();
    window['stores'] = stores;

    position.getServiceIpPosition()
        .then((location) => {

            runReactions(api, stores.app, stores.weather);
            stores.app.setCity(location.city, location.country);

            ReactDOM.render(
                React.createElement(Application, {stores}),
                document.getElementById('app-view')
            );
        });

}

function updateCityWeather(api: WeatherApi, appStore: AppStore, weatherStore: WeatherStore) {
    weatherStore.isUpdating(true);

    api.getCityCurrent(appStore.city, appStore.country)
        .then((weather) => {
            weatherStore
                .setWeatherInfo(weather.main)
                .setWeatherWind(weather.wind)
                .setWeatherDesc(weather.weather)
                .isUpdating(false);
        });
}

function runReactions(api: WeatherApi, appStore: AppStore, weatherStore: WeatherStore) {

    const onCityUpdate = reaction(
        () => [appStore.city, appStore.country] as [string, string],
        ([city, country]) => {
            if (city && country) {
                updateCityWeather(api, appStore, weatherStore)
            }
        }
    );

}