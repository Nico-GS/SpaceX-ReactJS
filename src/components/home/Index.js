
import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import '../../css/index.css';
import Elon from './Elon';

class Index extends Component {

    render() {
        return (
            <div className='body'>
                <Header />
                <Body />
                <Elon />
            </div>
        )
    }
}

export default Index;