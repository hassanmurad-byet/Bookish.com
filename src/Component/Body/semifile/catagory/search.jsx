import React, { useState } from 'react'
import './searsh.css';
import sre from './img/search.png';
const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Sort By: Name');

    const options = ['Name', 'Writer', 'Cetegory', 'Price'];

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setSelectedOption(null);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setInputValue(option);
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };


    return (
        <div  >


            <div className='allsearchs'>


                <div className="mysearsh">
                    <div className="bookinput">
                        <input type="text" className='searchs' placeholder='Search by title,author,keyword' />
                        <img src={sre} alt="" className="inputimgs" />
                    </div>

                </div>



                <div className="share">
                    <p className="page">Share 1 to 12 of 40 total</p>
                </div>


            </div>
            <div className="sorts">

                <div className="namm">
                    
                    <div className="input-dropdown-container">
                        <input

                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onClick={toggleDropdown}
                            className="input-field"
                            placeholder="Sort By: Name"
                        />
                        {isDropdownOpen && (
                            <ul className="dropdown-list">
                                {options
                                    .filter((option) =>
                                        option.toLowerCase().includes(inputValue.toLowerCase())
                                    )
                                    .map((option, index) => (
                                        <li key={index} onClick={() => handleOptionSelect(option)}>
                                            {option}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                </div>

                <p className="stors">Show: </p>
            </div>





        </div>
    )
}

export default Search;