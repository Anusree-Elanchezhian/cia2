import { React, useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "lime",
        },
        {
            id: 2,
            label: "lavender",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "aquamarine",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Color Changer</h1>
            <div className="dropdownContainer">
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
                <button className='button'></button>
            </div></center>
        </div>

    );
}
export default Dropdown;