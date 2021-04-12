import { data } from 'jquery';
import React, { useState, Component, ReactPropTypes } from 'react';

//import ReactDOM from 'react-dom';

export default function Select({ title, items = [], setselectData }) {
    const onSelectedData = (value) => {
        setselectData(value);
        //console.log("setselectData: ", value);
    }
    console.log("data: ", setselectData);
    return (
        <select className="custom-select" onChange={(e) => onSelectedData(e.target.value)}>
            {items.map(item => (
                <option key={item.id}>
                    {item.value}
                </option>
            ))}
        </select>
    );
}
  


//export default Select;