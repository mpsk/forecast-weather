import * as React from 'react';
import { Card, CardTitle, CardText, Slider } from 'react-md';

import {Stores} from './stores';
import WeatherCard from './components/WeatherCard/WeatherCard';

import './Application.scss';

interface AppProps {
    stores: Stores
}

const Application = (props: AppProps) => {
    const {stores} = props;
    const weatherProps = {
        city: stores.app.city,
        country: stores.app.country,
        weather: stores.weather
    };

    return (
        <div className='weather-client'>
            <WeatherCard {...weatherProps} />
        </div>
    );
}

export default Application;
