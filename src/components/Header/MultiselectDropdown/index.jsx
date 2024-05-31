/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import Loader from "../../Loader";

const MultiSelectDropdown = ({ name, options, loading, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleOptionChange = useCallback((option) => {
    setSelectedOptions((prevState) => {
      if (prevState.includes(option.id)) {
        return prevState.filter((id) => id !== option.id);
      } else {
        return [...prevState, option.id];
      }
    });
  }, []);

  useEffect(() => {
    onOptionChange(selectedOptions);
  }, [selectedOptions, onOptionChange]);

  return (
    <div className='dropdown-container'>
      <button className='dropdown-toggle' onClick={toggleDropdown}>
        Select {name}
        <span className={`arrow ${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <div className='dropdown-menu'>
          {loading ? (
            <div className='loader'>
              <span>Loading...</span>
              <Loader />
            </div>
          ) : (
            <div className='options' data-testid='dropdown-menu'>
              {options.map((option, index) => (
                <label key={index} className='option'>
                  <input
                    type='checkbox'
                    value={option.id}
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option.name}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default React.memo(MultiSelectDropdown);
