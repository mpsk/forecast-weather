'use strict';

import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {compose} from 'recompose';
import { Card, CardTitle, CardText, Slider, Toolbar, DropdownMenu, TextField } from 'react-md';

import SearchTextDropdown from './SearchTextDropdown';

import './TopBarMenu.scss';

interface TopBarMenuProps {

}

const TopBarMenu: React.SFC<TopBarMenuProps> = (props) => {
    return (
        <Toolbar className="TopBarMenu" colored>
            <div>Logo</div>
            <SearchTextDropdown className="search-city" id='search-city' />
        </Toolbar>
    )
}

export default compose(
    inject('app'),
    observer
)(TopBarMenu);

