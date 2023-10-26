import React from 'react';
import Logo from '../../assets/images/logo.svg';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';

const Header = () => {
  return (
    <>
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <Select />
                            
                            <div className='search'>
                                <input type='text' placeholder='Search for items...' />
                                <SearchIcon className='searchIcon cursor' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
