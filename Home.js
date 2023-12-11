import React, { Component } from 'react';
import Component_1 from '../components/Component_1';
import Component_2 from '../components/Component_2';
import Component_3 from '../components/Component_3';
import Component_4 from '../components/Component_4';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Component_1/>
                <Component_2 />
                <Component_3/>
                <Component_4/>
            </div>
        )
    }
}
