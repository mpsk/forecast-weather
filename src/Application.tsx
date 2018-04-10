'use strict';

import * as React from 'react';
import {Provider} from 'mobx-react';
import { Card, CardTitle, CardText, Slider, Toolbar, TextField } from 'react-md';

import {Stores} from './stores';
import TopBarMenu from './components/TopBarMenu/TopBarMenu';
import WeatherCard from './components/WeatherCard/WeatherCard';

import './Application.scss';

interface AppProps {
    stores: Stores
}

const Application = (props: AppProps) => {
    return (
        <Provider {...props.stores}>
            <div className='Application'>
                <TopBarMenu />
                <WeatherCard />
            </div>
        </Provider>
    );
}

export default Application;
