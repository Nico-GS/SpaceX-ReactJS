
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/index.css';

class Header extends Component {

    render() {
        return (
            <div className='body'>

                <div className='header'>
                    <p className='title'>Welcome to Space X</p>
                    <Link to="/"><img src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" className='logo' alt="logo" /></Link>
                </div>
            </div>
        )
    }
}

export default Header;