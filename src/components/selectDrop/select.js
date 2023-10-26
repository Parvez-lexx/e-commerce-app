import React, { useState } from 'react';
import './select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Select = () => {

  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState('All Categories');
  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  }
  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  }
   
  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className='selectDrop cursor position-relative'>
          <span className='openSelect' onClick={openSelect}>
            {selectedItem}
            <KeyboardArrowDownIcon className='arrow' />
          </span>
          {
            isOpenSelect === true && 
            <div className='select_drop'>
              <div className='searchField'>
                <input type='text' placeholder='Search here...' />
              </div>
              <ul className='searchResult'>
                <li onClick={() => closeSelect(0, 'All Categories')} className={`${selectedIndex===0 ? 'active' : ''}`}>All Categories</li>
                <li onClick={() => closeSelect(1, 'Wines & Alcohol')} className={`${selectedIndex===1 ? 'active' : ''}`}>Wines & Alcohol</li>
                <li onClick={() => closeSelect(2, 'Clothing & Beauty')} className={`${selectedIndex===2 ? 'active' : ''}`}>Clothing & Beauty</li>
                <li onClick={() => closeSelect(3, 'Pet Foods & Toy')} className={`${selectedIndex===3 ? 'active' : ''}`}>Pet Foods & Toy</li>
                <li onClick={() => closeSelect(4, 'Fast food')} className={`${selectedIndex===4 ? 'active' : ''}`}>Fast food</li>
                <li onClick={() => closeSelect(5, 'Baking material')} className={`${selectedIndex===5 ? 'active' : ''}`}>Baking material</li>
                <li onClick={() => closeSelect(6, 'Vegetables')} className={`${selectedIndex===6 ? 'active' : ''}`}>Vegetables</li>
                <li onClick={() => closeSelect(7, 'Fresh Seafood')} className={`${selectedIndex===7 ? 'active' : ''}`}>Fresh Seafood</li>
                <li onClick={() => closeSelect(8, 'Noodles & Rice')} className={`${selectedIndex===8 ? 'active' : ''}`}>Noodles & Rice</li>
                <li onClick={() => closeSelect(9, 'Ice cream')} className={`${selectedIndex===9 ? 'active' : ''}`}>Ice cream</li>
                <li onClick={() => closeSelect(1, 'Fresh Fruits')} className={`${selectedIndex===10 ? 'active' : ''}`}>Fresh Fruits </li>
                <li onClick={() => closeSelect(1, 'Milks and Dairies')} className={`${selectedIndex===11 ? 'active' : ''}`}>Milks and Dairies</li>

              </ul>
            </div>
          }
      </div>
    </ClickAwayListener>
  )
}

export default Select;
