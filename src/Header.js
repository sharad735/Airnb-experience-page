import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';


function Header() {
  return (
    <div className='header'>
        <img
            className='header_icon'
            src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg'
        />

        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Beacome a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>

    </div>
  )
}

export default Header