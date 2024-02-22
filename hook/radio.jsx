import React from 'react';
export default (name, datas, keys=[], onclick=(e)=>{})=>{
    let radios = [];
    for(let index in datas) {
        radios.push(
            <div>
                <input 
                    type="radio" 
                    name={name} 
                    id={keys[index] || datas[index]} 
                    onClick={typeof onclick === 'function' ? onclick : onclick[index]}
                />
                <label for={keys[index] || datas[index]}>{datas[index]}</label>
            </div>
        )
    }
    return radios;
}