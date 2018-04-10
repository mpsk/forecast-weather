'use strict';

import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {compose} from 'recompose';
import { 
    Card, CardTitle, CardText, CardActions, Divider,
    List, ListItem, ListItemControl, Button, CircularProgress
} from 'react-md';

import {AppStore} from '../../stores';
import WeatherStore, { ForecastDataMain, ForecastDataWind, ForecastDataDesc } from '../../stores/WeatherStore';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './WeatherCard.scss';

interface WeatherCardProps {

}

interface FromStateProps extends WeatherCardProps {
    app: AppStore;
    weather: WeatherStore;
}

const WeatherCard: React.SFC<WeatherCardProps> = (props: FromStateProps) => {
	const {weather} = props;
    const {city, country} = props.app;
    const temp = weather.info ? weather.info.temp : 'NaN';
    const info = getInfo(weather.info, weather.wind, weather.description);
    const date = (d) => (`${d.toDateString()}`);

    const isUpdating = weather.updating ? 'weather-card-updating' : '';

    return (
        <Card className={`WeatherCard weather-card ${isUpdating}`}>
            <CardTitle title={`${city}, ${country}`} subtitle={date(new Date())} />
            <CardText className="weather-card-info">
                <div className="weather-card-info-item temp">{info.temp}</div>
                <div className="weather-card-info-item degree">{info.degree}</div>
                <div className="weather-card-info-item icon">{info.icon}</div>
                <div className="weather-card-info-item">{`Min: ${info.min} ${info.degree} Max: ${info.max} ${info.degree}`}</div>
            </CardText>
            <Divider />
            <CardText className="weather-card-info">
                <div className="weather-card-info-item">{info.windSpeed}</div>
                <div className="weather-card-info-item">{info.description}</div>
            </CardText>
        </Card>
    )
}

export default compose(
    inject('app', 'weather'),
    observer
)(WeatherCard) as React.SFC<WeatherCardProps>;

function getInfo(info: ForecastDataMain, wind: ForecastDataWind, description: Array<ForecastDataDesc>) {
    let data = {
        temp: '',
        min: '',
        max: '',
        degree: '',
        windSpeed: '',
        description: '',
        icon: ''
    };
    let icon;

    if (description) {
        data = {...data, 
            description: description.map(item => item.main).join(', '),
        };
        icon = <WeatherIcon icon={description[0].icon} iconId={description[0].id} />;
    }

    if (info) {
        data = {...data, 
            temp: `${getTemp(info.temp)}`,
            min: `${getTemp(info.temp_min)}`,
            max: `${getTemp(info.temp_max)}`,
            degree: '°C', 
            icon
        };
    }

    if (wind) {
        data = {...data, windSpeed: `${wind.speed} m/s`};
    }

    return data;
}

function getTemp(temp: number) {
    return temp.toFixed(1);
}