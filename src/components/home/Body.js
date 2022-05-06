
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/index.css';

class Body extends Component {

    render() {
        return (
            <div className='body'>
                <div className='image'>
                    <img src="https://starwalk.space/gallery/images/inspiration4-mission/1920x1080.jpg" alt="SpaceX" width="1920" height="1080" />
                </div>
                <Link to="/view-capsules"><button type="button" class="btn btn-primary btn-lg button_left">Capsules</button></Link>
                <Link to="/view-launches"><button type="button" class="btn btn-primary btn-lg button_right">Launches</button></Link>
            </div>
        )
    }
}

export default Body;