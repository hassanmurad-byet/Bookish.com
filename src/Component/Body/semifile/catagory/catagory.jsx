import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import arrow from './img/arrow1.png';
import './catagory.css';

const Catagory = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBiography, setIsBiography] = useState(false);
  const [isChildren, setIsChildren] = useState(false);
  const [isCroft, setIsCroft] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };

  const Boitoggledropdown = () => {
      setIsBiography(!isBiography)
   
  };
  const Childrendropdown = () => {
    setIsChildren(!isChildren)
 
};

const Croftdropdown = () => {
  setIsCroft(!isCroft)

};


  return (
    <div className='catagorys'>
      <div className="option">
        <Link className='cetegori'>Cetegories</Link>

        <Link className="cetaoption">
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            Art & Photography <img src={arrow} alt="" className='arrimg' />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link className="cetaoptions">Most Popular Writer</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Highest Rated Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Best Seller Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Arrival</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Used Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Semi Used Book</Link>

            </div>
          )}
        </Link>
        <div className='cataline'></div>
        <Link className="cetaoption">
          <div className="dropdown-toggle" onClick={Boitoggledropdown}>
            Biography <img src={arrow} alt="" className='arrimg' />
          </div>
          {isBiography && (
            <div className="dropdown-menu">
              <Link className="cetaoptions">Most Popular Writer</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Highest Rated Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Best Seller Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Arrival</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Used Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Semi Used Book</Link>

            </div>
          )}
        </Link>
        <div className='cataline'></div>
        <Link className="cetaoption">
          <div className="dropdown-toggle" onClick={Childrendropdown}>
            Children's Books <img src={arrow} alt="" className='arrimg' />
          </div>
          {isChildren && (
            <div className="dropdown-menu">
              <Link className="cetaoptions">Most Popular Writer</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Highest Rated Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Best Seller Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Arrival</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Used Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Semi Used Book</Link>

            </div>
          )}
        </Link>
        <div className='cataline'></div>
        <Link className="cetaoption">
          <div className="dropdown-toggle" onClick={Croftdropdown}>
            Croft & Hobbies <img src={arrow} alt="" className='arrimg' />
          </div>
          {isCroft && (
            <div className="dropdown-menu">
              <Link className="cetaoptions">Most Popular Writer</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Highest Rated Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Best Seller Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Arrival</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Used Book</Link>
              <div className='cataline'></div>
              <Link className="cetaoptions">Newest Semi Used Book</Link>

            </div>
          )}
        </Link>
      </div>

    </div>
  )
}

export default Catagory;