'use strict';

import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {compose, withState, withHandlers, withProps} from 'recompose';
import { DropdownMenu, TextField, ListItem } from 'react-md';
import { AppStore } from '../../stores';

interface SearchTextDropdownProps {
    id: string;
    className?: string;
}

interface FromStateProps extends SearchTextDropdownProps {
    app: AppStore;
    onSearch(value): void;
    onSelectCity(cityName, country): void;
    city: string;
    showList: boolean;
    textCity(value: string): void;
    toggleList(value: boolean): void;
}

const SearchTextDropdown: React.SFC<FromStateProps> = ({id, className = '', city, showList, toggleList, app, onSearch, onSelectCity}) => {
    const menuItems = app.cityList
        .map((city, i) => {
            const props = {
                key: i + city.name,
                primaryText: `${city.name}, ${city.country}`,
                onClick: () => onSelectCity(city.name, city.country)
            };
            return <ListItem {...props}/>
        });

    const dropdownProps = {
        className: ['SearchTextDropdown', className].join(' '),
        id: `${id}-dropdown-menu`,
        menuItems: menuItems,
        visible: showList && menuItems.length > 0,
        position: DropdownMenu.Positions.BELOW,
        anchor: {
            x: DropdownMenu.HorizontalAnchors.INNER_LEFT,
            y: DropdownMenu.VerticalAnchors.BOTTOM,
        },
        onVisibilityChange: (visible: boolean) => {
            if (!visible) {
                toggleList(visible);
            }
        }
    };

    const textProps = {
        id: `${id}-textfield`,
        placeholder: 'Search City',
        value: city,
        onChange: onSearch
    };

    return (
        <DropdownMenu {...dropdownProps}>
            <TextField {...textProps} />
        </DropdownMenu>
    )
}

export default compose(
    inject('app'),
    withState('showList', 'toggleList', false),
    withState('city', 'textCity', (props) => props.app.city),
    withHandlers({
        onSearch: (props: FromStateProps) => (value) => {
            props.textCity(value);
            if (value) {
                props.app.searchCity(value);
                props.toggleList(true);
            }
        },
        onSelectCity: (props: FromStateProps) => (city, country) => {
            if (city) {
                props.app.setCity(city, country);
                props.textCity(city);
                props.toggleList(false);
            }
        }
    }),
    observer
)(SearchTextDropdown) as React.SFC<SearchTextDropdownProps>;
